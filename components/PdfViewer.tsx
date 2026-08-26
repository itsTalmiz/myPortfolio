'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader2, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

declare global {
  interface Window {
    pdfjsLib?: any;
  }
}

interface PdfViewerProps {
  url: string;
}

export function PdfViewer({ url }: PdfViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.2);
  const [pdfDoc, setPdfDoc] = useState<any>(null);

  // Load PDF.js library from CDN
  useEffect(() => {
    let isMounted = true;

    const loadPdfJs = async () => {
      if (window.pdfjsLib) {
        return window.pdfjsLib;
      }

      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
        script.onload = () => {
          if (window.pdfjsLib) {
            try {
              const workerUrl = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
              const blob = new Blob([`importScripts("${workerUrl}");`], { type: 'application/javascript' });
              window.pdfjsLib.GlobalWorkerOptions.workerSrc = URL.createObjectURL(blob);
            } catch (e) {
              window.pdfjsLib.GlobalWorkerOptions.workerSrc =
                'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            }
            resolve(window.pdfjsLib);
          } else {
            reject(new Error('PDF.js failed to initialize'));
          }
        };
        script.onerror = () => reject(new Error('Failed to load PDF viewer library'));
        document.body.appendChild(script);
      });
    };

    loadPdfJs()
      .then((pdfjs) => {
        if (!isMounted) return;
        const loadingTask = pdfjs.getDocument(url);
        return loadingTask.promise;
      })
      .then((doc) => {
        if (!isMounted || !doc) return;
        setPdfDoc(doc);
        setNumPages(doc.numPages);
        setIsLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error('PDF load error:', err);
        setError('Unable to render PDF preview directly. Please use the Download or Open PDF button above.');
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  // Render pages onto canvases when doc or scale changes
  useEffect(() => {
    if (!pdfDoc || !containerRef.current) return;

    const renderPages = async () => {
      const container = containerRef.current;
      if (!container) return;

      container.innerHTML = '';

      for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
        try {
          const page = await pdfDoc.getPage(pageNum);
          const viewport = page.getViewport({ scale });

          const pageWrapper = document.createElement('div');
          pageWrapper.className = 'mb-6 flex flex-col items-center shadow-2xl rounded-lg overflow-hidden bg-white border border-foreground/10';

          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          // High DPI display support
          const outputScale = window.devicePixelRatio || 1;
          canvas.width = Math.floor(viewport.width * outputScale);
          canvas.height = Math.floor(viewport.height * outputScale);
          canvas.style.width = `${Math.floor(viewport.width)}px`;
          canvas.style.height = `${Math.floor(viewport.height)}px`;

          if (context) {
            const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;
            const renderContext = {
              canvasContext: context,
              transform: transform,
              viewport: viewport,
            };
            await page.render(renderContext).promise;
          }

          pageWrapper.appendChild(canvas);
          container.appendChild(pageWrapper);
        } catch (err) {
          console.error(`Error rendering page ${pageNum}:`, err);
        }
      }
    };

    renderPages();
  }, [pdfDoc, scale]);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2.5));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.6));
  const resetZoom = () => setScale(1.2);

  return (
    <div className="flex flex-col h-full w-full">
      {/* Controls toolbar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-foreground/[0.08] bg-foreground/[0.03] text-xs">
        <div className="text-muted-foreground font-mono-tech">
          {numPages > 0 ? `${numPages} ${numPages === 1 ? 'Page' : 'Pages'}` : 'Loading PDF...'}
        </div>
        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="sm"
            onClick={zoomOut}
            disabled={scale <= 0.6 || isLoading}
            className="h-7 px-2 text-muted-foreground hover:text-foreground"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </Button>
          <span className="font-mono-tech text-[11px] text-muted-foreground min-w-[45px] text-center">
            {Math.round(scale * 100)}%
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={zoomIn}
            disabled={scale >= 2.5 || isLoading}
            className="h-7 px-2 text-muted-foreground hover:text-foreground"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetZoom}
            disabled={scale === 1.2 || isLoading}
            className="h-7 px-2 text-muted-foreground hover:text-foreground"
            title="Reset Zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      {/* Main Canvas Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center bg-card/40">
        {isLoading && (
          <div className="flex flex-col items-center justify-center my-16 space-y-3">
            <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
            <p className="text-muted-foreground text-xs font-mono-tech">Rendering PDF document...</p>
          </div>
        )}

        {error && (
          <div className="w-full max-w-3xl space-y-6 text-sm text-foreground/90 my-4 leading-relaxed font-sans">
            <div className="p-4 rounded-xl glass border-emerald-500/20 bg-emerald-500/5 text-center mb-4">
              <p className="text-xs text-emerald-400 font-mono-tech mb-1">Interactive Resume Document View</p>
              <p className="text-xs text-muted-foreground">Original PDF layout can also be downloaded directly via the Download button above.</p>
            </div>

            <div className="p-6 rounded-2xl glass border-foreground/[0.08] bg-card/60 shadow-xl space-y-6">
              {/* Header */}
              <div className="border-b border-foreground/[0.08] pb-4">
                <h2 className="text-2xl font-bold text-foreground">M. TALMIZ UR REHMAN</h2>
                <p className="text-emerald-400 font-mono-tech text-xs mt-1">Senior Hardware Design Engineer (Firmware)</p>
                <p className="text-xs text-muted-foreground mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono-tech">
                  <span>📍 Islamabad, Pakistan</span>
                  <span>📧 contact@itstalmiz.com</span>
                  <span>📞 +92 336 5267868</span>
                  <span>🔗 linkedin.com/in/itstalmiz</span>
                </p>
              </div>

              {/* Summary */}
              <div>
                <h3 className="text-xs font-bold text-emerald-400 font-mono-tech mb-2">// SUMMARY</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Embedded firmware and hardware engineer with 3 years across the full product lifecycle — firmware and BSP bring-up, PCB design, hardware integration, and mass production. Hands-on with ARM-based Qualcomm QCM6125 / Quectel SOM platforms, Android (AOSP), OTA, and high-speed multilayer PCB design in Altium.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-xs font-bold text-emerald-400 font-mono-tech mb-2">// TECHNICAL SKILLS</h3>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg glass border-foreground/[0.06]"><span className="font-semibold text-foreground">Languages:</span> <span className="text-muted-foreground">C, C++, Python, Embedded C, Bash/Shell, ARM Assembly, Verilog</span></div>
                  <div className="p-2.5 rounded-lg glass border-foreground/[0.06]"><span className="font-semibold text-foreground">Firmware & OS:</span> <span className="text-muted-foreground">Embedded Linux, AOSP/Android, BSP & drivers, OTA, RTOS, Perfetto</span></div>
                  <div className="p-2.5 rounded-lg glass border-foreground/[0.06]"><span className="font-semibold text-foreground">Hardware & PCB:</span> <span className="text-muted-foreground">Altium Designer, EasyEDA, Flex & Multilayer PCB, EMI Control</span></div>
                  <div className="p-2.5 rounded-lg glass border-foreground/[0.06]"><span className="font-semibold text-foreground">Production & QC:</span> <span className="text-muted-foreground">SMT oversight, GMS key flashing, FCC compliance (EMI/EMC, ESD)</span></div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-xs font-bold text-emerald-400 font-mono-tech mb-2">// EXPERIENCE</h3>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl glass border-foreground/[0.06]">
                    <div className="flex justify-between font-semibold text-foreground flex-wrap">
                      <span>Senior Hardware Design Engineer (Firmware) — AIO APP Inc</span>
                      <span className="text-emerald-400 font-mono-tech text-[11px]">11/2023 – Present</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Qualcomm QCM6125 platform bring-up, Linux kernel/BSP & AOSP customization, display, touch & camera drivers.</li>
                      <li>Customized AOSP and full/incremental OTA update delivery.</li>
                      <li>High-speed flex and multilayer PCB design with EMI control in Altium.</li>
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl glass border-foreground/[0.06]">
                    <div className="flex justify-between font-semibold text-foreground flex-wrap">
                      <span>International Engineering Visits — Shenzhen, China (4 Visits)</span>
                      <span className="text-emerald-400 font-mono-tech text-[11px]">2024 – 2025</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Led mass production bring-up, peripheral optimization, antenna tuning (2.4/5GHz), FCC compliance, thermal profiling & SMT oversight.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={containerRef} className="w-full flex flex-col items-center" />
      </div>
    </div>
  );
}
