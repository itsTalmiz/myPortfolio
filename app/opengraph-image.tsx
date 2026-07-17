import { ImageResponse } from 'next/server';

export const alt = 'M. Talmiz Ur Rehman — Senior Hardware Design Engineer (Firmware)';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          backgroundColor: '#020617',
          backgroundImage:
            'radial-gradient(circle at 15% 15%, rgba(16,185,129,0.25) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(56,189,248,0.18) 0%, transparent 45%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#34d399',
              fontSize: 22,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: '#34d399' }} />
            available_for_work: true
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, color: '#f8fafc', lineHeight: 1.1 }}>
            M. Talmiz Ur Rehman
          </div>
          <div style={{ display: 'flex', fontSize: 36, color: '#10b981', fontWeight: 600 }}>
            Senior Hardware Design Engineer (Firmware)
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#94a3b8', maxWidth: 900 }}>
            Qualcomm QCM6125 · AOSP/Android · BSP & Embedded Linux · High-Speed PCB Design
          </div>
        </div>

        <div style={{ display: 'flex', gap: 14 }}>
          {['C/C++', 'AOSP', 'Verilog', 'Altium', 'RTOS'].map((tag) => (
            <div
              key={tag}
              style={{
                display: 'flex',
                padding: '10px 20px',
                borderRadius: 10,
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#cbd5e1',
                fontSize: 22,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
