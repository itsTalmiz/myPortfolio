'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Cpu, Plane, Eye, ChevronLeft, ChevronRight, X, Sparkles, Factory, Camera } from 'lucide-react';

export interface AlbumPhoto {
  id: string;
  src: string;
  title: string;
  category: 'engineering' | 'journey';
  tag: string;
  caption: string;
  aspect: 'portrait' | 'landscape';
}

export const chinaPhotos: AlbumPhoto[] = [
  // Engineering & Factory Floor (13 photos)
  {
    id: 'smt-fuji-line',
    src: '/china-album/1744049214511.jpg',
    title: 'Fuji NXT High-Speed SMT Line',
    category: 'engineering',
    tag: 'SMT Manufacturing',
    caption: 'High-speed Fuji NXT pick-and-place line with high-density component reel feeder banks for precise automated placement of micro-passives and multi-pin ICs.',
    aspect: 'portrait',
  },
  {
    id: 'rf-chamber',
    src: '/china-album/1744049213946.jpg',
    title: '3D Spherical RF Anechoic Chamber',
    category: 'engineering',
    tag: 'RF & Antenna Tuning',
    caption: 'Over-The-Air (OTA) antenna pattern measurement and passive S11 tuning inside a microwave absorber chamber, optimizing 2.4/5GHz Wi-Fi and Bluetooth transmission.',
    aspect: 'portrait',
  },
  {
    id: 'thermal-flir',
    src: '/china-album/1780402348958.jpg',
    title: 'FLIR Thermal Hotspot Mapping',
    category: 'engineering',
    tag: 'Thermal Qualification',
    caption: 'High-resolution thermal camera inspection under continuous CPU/GPU peak load, validating heat dissipation across the PMIC and custom lithium polymer battery.',
    aspect: 'portrait',
  },
  {
    id: 'bga-dye-pry',
    src: '/china-album/1744049214514.jpg',
    title: 'BGA Dye-and-Pry Reliability Analysis',
    category: 'engineering',
    tag: 'Failure Analysis',
    caption: 'Destructive red dye penetrant inspection across multilayer PCB footprints following thermal shock, verifying zero solder ball micro-cracking or pad cratering.',
    aspect: 'portrait',
  },
  {
    id: 'edl-flashing',
    src: '/china-album/1780402348966.jpg',
    title: 'Parallel 10-Device EDL Flashing Rig',
    category: 'engineering',
    tag: 'Production Automation',
    caption: 'Custom automated Emergency Download (EDL) flashing terminal provisioning 10 Qualcomm devices concurrently with signed AOSP images and cryptographic hardware keys.',
    aspect: 'portrait',
  },
  {
    id: 'factory-test-bench',
    src: '/china-album/1780402349999.jpg',
    title: 'Live Hardware Flashing & Bring-Up Bench',
    category: 'engineering',
    tag: 'Factory Bring-Up',
    caption: 'Factory engineering station running Linux flashing tools while debugging live MIPI touchscreen display, NFC antenna, and battery charging curves simultaneously.',
    aspect: 'landscape',
  },
  {
    id: 'smt-inspection-station',
    src: '/china-album/1744049214175.jpg',
    title: 'SMT Optical Inspection & Coordinate Setup',
    category: 'engineering',
    tag: 'SMT Line Quality',
    caption: 'Verifying PCB layout coordinates and connector footprint alignment on the active SMT conveyor line with factory assembly operators in ESD protective apparel.',
    aspect: 'portrait',
  },
  {
    id: 'micro-soldering-scope',
    src: '/china-album/1780402349409.jpg',
    title: 'Micro-Soldering Probe Wiring on BGA',
    category: 'engineering',
    tag: 'Lab Debugging',
    caption: 'Precision magnet wire jumper soldering directly on exposed module balls for real-time oscilloscope signal capture and bus timing validation during prototype bring-up.',
    aspect: 'portrait',
  },
  {
    id: 'pneumatic-fct-jig',
    src: '/china-album/1780402349638.jpg',
    title: 'Pneumatic Functional Test (FCT) Fixture',
    category: 'engineering',
    tag: 'Custom Test Jigs',
    caption: 'Custom clamp-down bed-of-nails test fixture with bilingual engineering calibration notes for high-throughput automated board-level electrical verification.',
    aspect: 'portrait',
  },
  {
    id: 'assembly-line-conveyor',
    src: '/china-album/1780402349741.jpg',
    title: 'Final Assembly Line & Barcode Serialization',
    category: 'engineering',
    tag: 'Mass Production',
    caption: 'Finished TSAI Android hardware passing along final assembly lines, applying IMEI/MAC labels, and packaging into custom electrostatic protective trays.',
    aspect: 'portrait',
  },
  {
    id: 'palletized-production',
    src: '/china-album/1780402349776.jpg',
    title: 'Palletized Production Ready for Export',
    category: 'engineering',
    tag: 'Shipping & Logistics',
    caption: 'Stacked pallets of boxed, quality-inspected, and sealed hardware ready for global air freight shipment to enterprise restaurant partners.',
    aspect: 'landscape',
  },
  {
    id: 'huaqiangbei-sourcing',
    src: '/china-album/1744049213919.jpg',
    title: 'Component Procurement in Huaqiangbei',
    category: 'engineering',
    tag: 'Supply Chain Agility',
    caption: 'Evaluating physical samples of custom right-angle USB-C connector breakout boards at the Huaqiangbei electronics markets to solve supply chain lead times on the spot.',
    aspect: 'portrait',
  },
  {
    id: 'environmental-chamber',
    src: '/china-album/1744049213382.jpg',
    title: 'Programmable Environmental Chamber Testing',
    category: 'engineering',
    tag: 'Reliability Stress',
    caption: 'Configuring the TEMI 300 temperature and humidity chamber for accelerated aging cycles (-20°C to +70°C) to qualify component longevity under harsh environments.',
    aspect: 'portrait',
  },

  // Journey, Culture & On-the-Ground (17 photos)
  {
    id: 'canton-tower-portrait',
    src: '/china-album/1780402349962.jpg',
    title: 'At Canton Tower, Guangzhou',
    category: 'journey',
    tag: 'On-Site Engineering',
    caption: 'Standing before the 600m Canton Tower during downtime between factory iterations in Guangdong.',
    aspect: 'portrait',
  },
  {
    id: 'shenzhen-bay-coast',
    src: '/china-album/1744049214482.jpg',
    title: 'Shenzhen Bay Coastal Reflections',
    category: 'journey',
    tag: 'Shenzhen Life',
    caption: 'Taking a breath along the coastline after weeks of intensive round-the-clock factory floor debugging.',
    aspect: 'landscape',
  },
  {
    id: 'trip4-boarding-pass',
    src: '/china-album/1780402348796.jpg',
    title: '4th China Mission Departure',
    category: 'journey',
    tag: 'Mission Logs',
    caption: 'Passport and boarding pass ready for Mission #4—transitioning from prototype validation to full mass production.',
    aspect: 'portrait',
  },
  {
    id: 'trip1-return-flight',
    src: '/china-album/1744049211240.jpg',
    title: 'Returning from EVT/DVT Validation',
    category: 'journey',
    tag: 'Mission Logs',
    caption: 'Boarding the return leg after successfully bringing up the first operational batch of prototypes.',
    aspect: 'portrait',
  },
  {
    id: 'seg-plaza-tower',
    src: '/china-album/1744049214302.jpg',
    title: 'SEG Plaza, Huaqiangbei',
    category: 'journey',
    tag: 'Hardware Capital',
    caption: 'The iconic 72-story SEG Plaza skyscraper—the bustling epicenter of the world electronics supply chain where weeks become minutes.',
    aspect: 'portrait',
  },
  {
    id: 'pavilion-hotel',
    src: '/china-album/1744049213116.jpg',
    title: 'The Pavilion Hotel, Shenzhen',
    category: 'journey',
    tag: 'Shenzhen Nights',
    caption: 'Base camp during intense firmware and hardware debugging sprints across Bao\'an and Futian districts.',
    aspect: 'portrait',
  },
  {
    id: 'lantern-festival-arch',
    src: '/china-album/1744049214665.jpg',
    title: 'Festive Lanterns Celebration',
    category: 'journey',
    tag: 'Cultural Immersion',
    caption: 'Vibrant traditional lantern installation illuminating the night streets of Guangdong during regional festivities.',
    aspect: 'portrait',
  },
  {
    id: 'shenzhen-seagulls',
    src: '/china-album/1744049215071.jpg',
    title: 'Shenzhen Bay Wildlife',
    category: 'journey',
    tag: 'Shenzhen Life',
    caption: 'Flocks of migratory seagulls along the Shenzhen Bay coastal park on a weekend break.',
    aspect: 'portrait',
  },
  {
    id: 'guangdong-dimsum',
    src: '/china-album/1744049211511.jpg',
    title: 'Authentic Cantonese Dim Sum & Dumplings',
    category: 'journey',
    tag: 'Food & Culture',
    caption: 'Late-night dumplings and fried rice with local engineering partners after long hours in the cleanroom.',
    aspect: 'portrait',
  },
  {
    id: 'dice-game-bonding',
    src: '/china-album/1744049211192.jpg',
    title: 'Local Team Bonding & Strategy Games',
    category: 'journey',
    tag: 'Team Spirit',
    caption: 'Unwinding with traditional dice games alongside local factory team members after hitting delivery milestones.',
    aspect: 'portrait',
  },
  {
    id: 'dragon-statue-temple',
    src: '/china-album/1744049212554.jpg',
    title: 'Bronze Dragon at Ancient Gate',
    category: 'journey',
    tag: 'Cultural Heritage',
    caption: 'Exploring centuries-old temple architecture and cultural heritage in Guangdong between factory visits.',
    aspect: 'portrait',
  },
  {
    id: 'starbucks-guangzhou',
    src: '/china-album/1780402349708.jpg',
    title: 'Colonial Architecture in Guangzhou',
    category: 'journey',
    tag: 'Architecture',
    caption: 'Unique themed architecture in Guangzhou during inter-city travel between supplier manufacturing facilities.',
    aspect: 'portrait',
  },
  {
    id: 'teemall-heart-tree',
    src: '/china-album/1780402349854.jpg',
    title: 'Illuminated Tree at Teemall',
    category: 'journey',
    tag: 'City Lights',
    caption: 'The famous heart-shaped canopy illuminated with fairy lights in the commercial heart of Guangzhou.',
    aspect: 'portrait',
  },
  {
    id: 'classical-temple-gate',
    src: '/china-album/1780402349884.jpg',
    title: 'Ancient Lingnan Temple Entrance',
    category: 'journey',
    tag: 'Cultural Heritage',
    caption: 'Traditional Chinese Lingnan-style architectural gate surrounded by ancient trees.',
    aspect: 'landscape',
  },
  {
    id: 'festive-night-street',
    src: '/china-album/1780402349885.jpg',
    title: 'Neon Canopy on Festive Street',
    category: 'journey',
    tag: 'City Lights',
    caption: 'Lively pedestrian streets adorned with glowing stars and lanterns in southern China.',
    aspect: 'portrait',
  },
  {
    id: 'skyscrapers-cloudy-night',
    src: '/china-album/1780402349893.jpg',
    title: 'Guangzhou CTF Finance Center at Night',
    category: 'journey',
    tag: 'Modern China',
    caption: 'Towering commercial high-rises piercing through the night mist, showcasing China\'s rapid technological modernism.',
    aspect: 'portrait',
  },
  {
    id: 'butterflies-garden',
    src: '/china-album/1780402349916.jpg',
    title: 'Butterflies in Botanical Gardens',
    category: 'journey',
    tag: 'Nature',
    caption: 'Serene moments enjoying lush southern China flora before the next engineering sprint.',
    aspect: 'portrait',
  },
];

export function ChinaAlbumGallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'engineering' | 'journey'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = chinaPhotos.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const selectedPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  };

  return (
    <section className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-foreground/[0.08] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Camera className="w-5 h-5 text-emerald-400" />
            <h2 className="text-2xl font-bold font-mono-tech text-foreground">
              On-Site Photo Album (30 Verified Captures)
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            From automated SMT pick-and-place lines and anechoic chambers to the streets of Huaqiangbei.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setActiveFilter('all');
              setSelectedPhotoIndex(null);
            }}
            className={`rounded-full font-mono-tech text-xs transition-all ${
              activeFilter === 'all'
                ? 'bg-emerald-500 text-background border-emerald-500 font-semibold shadow-md'
                : 'glass border-foreground/10 text-muted-foreground hover:text-foreground'
            }`}
          >
            All Photos ({chinaPhotos.length})
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setActiveFilter('engineering');
              setSelectedPhotoIndex(null);
            }}
            className={`rounded-full font-mono-tech text-xs transition-all flex items-center gap-1.5 ${
              activeFilter === 'engineering'
                ? 'bg-emerald-500 text-background border-emerald-500 font-semibold shadow-md'
                : 'glass border-foreground/10 text-muted-foreground hover:text-foreground'
            }`}
          >
            <Factory className="w-3.5 h-3.5" />
            Factory &amp; SMT (13)
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setActiveFilter('journey');
              setSelectedPhotoIndex(null);
            }}
            className={`rounded-full font-mono-tech text-xs transition-all flex items-center gap-1.5 ${
              activeFilter === 'journey'
                ? 'bg-emerald-500 text-background border-emerald-500 font-semibold shadow-md'
                : 'glass border-foreground/10 text-muted-foreground hover:text-foreground'
            }`}
          >
            <Plane className="w-3.5 h-3.5" />
            Journey &amp; Culture (17)
          </Button>
        </div>
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo, index) => (
          <Card
            key={photo.id}
            onClick={() => setSelectedPhotoIndex(index)}
            className="group relative cursor-pointer overflow-hidden glass border-foreground/[0.08] hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl bg-card/40 flex flex-col justify-between"
          >
            <div className={`relative w-full overflow-hidden bg-black/40 ${photo.aspect === 'landscape' ? 'h-40 sm:h-48' : 'h-52 sm:h-64'}`}>
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Tag pill */}
              <div className="absolute top-2.5 left-2.5">
                <span className={`text-[10px] font-mono-tech px-2 py-0.5 rounded-full backdrop-blur-md border ${
                  photo.category === 'engineering'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                    : 'bg-sky-500/20 text-sky-300 border-sky-500/30'
                }`}>
                  {photo.tag}
                </span>
              </div>

              {/* Hover click indicator */}
              <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-emerald-500 text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                <Eye className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="p-3 space-y-1 border-t border-foreground/[0.06] bg-card/60">
              <h3 className="font-semibold text-xs sm:text-sm text-foreground line-clamp-1 group-hover:text-emerald-400 transition-colors">
                {photo.title}
              </h3>
              <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                {photo.caption}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Full-Screen Lightbox Modal */}
      <Dialog open={selectedPhotoIndex !== null} onOpenChange={() => setSelectedPhotoIndex(null)}>
        <DialogContent className="max-w-4xl p-0 glass border-foreground/[0.1] bg-background/95 backdrop-blur-xl overflow-hidden text-foreground">
          {selectedPhoto && (
            <div className="relative flex flex-col md:flex-row max-h-[85vh]">
              {/* Image viewer */}
              <div className="relative flex-1 bg-black/60 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                <div className="relative w-full h-[350px] md:h-[500px]">
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Left Arrow */}
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-emerald-500 hover:text-black transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                {/* Right Arrow */}
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-emerald-500 hover:text-black transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Sidebar with technical notes */}
              <div className="w-full md:w-80 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-foreground/[0.08] space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge
                      className={`border-0 ${
                        selectedPhoto.category === 'engineering'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                      }`}
                    >
                      {selectedPhoto.tag}
                    </Badge>
                    <span className="font-mono-tech text-xs text-muted-foreground">
                      {selectedPhotoIndex! + 1} of {filteredPhotos.length}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground leading-snug">
                    {selectedPhoto.title}
                  </h3>

                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {selectedPhoto.caption}
                  </p>
                </div>

                <div className="pt-4 border-t border-foreground/[0.06] space-y-2">
                  <p className="text-xs text-muted-foreground font-mono-tech">
                    Hardware Deployment: Shenzhen / Guangdong, China
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handlePrev}
                      className="flex-1 text-xs font-mono-tech"
                    >
                      Previous
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleNext}
                      className="flex-1 text-xs font-mono-tech text-emerald-400 border-emerald-500/30"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
