import { ImageResponse } from 'next/og';

export const alt = 'BPP GKII | Portal Resmi Badan Pengurus Pusat Gereja Kemah Injil Indonesia';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#06195c',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          padding: '60px',
          border: '12px solid #D4AF37',
          position: 'relative',
        }}
      >
        {/* Background Radial Glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '400px',
            backgroundColor: '#0c35a6',
            opacity: 0.6,
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />

        {/* Top Header Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 24px',
            borderRadius: '50px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            color: '#D4AF37',
            fontSize: '16px',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            zIndex: 10,
          }}
        >
          <span>PORTAL RESMI KELEMBAGAAN BPP GKII</span>
        </div>

        {/* Center Main Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '16px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: '32px',
              fontWeight: 800,
              color: '#D4AF37',
              letterSpacing: '1px',
            }}
          >
            Badan Pengurus Pusat
          </div>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.1,
              maxWidth: '1000px',
            }}
          >
            Gereja Kemah Injil Indonesia
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#cbd5e1',
              maxWidth: '850px',
              lineHeight: 1.5,
              marginTop: '8px',
            }}
          >
            Akses Publik Resmi Tata Gereja (TGTRT), Surat Edaran BPP, Form Pendataan, dan Informasi Direktori 13 Wilayah BPW
          </div>
        </div>

        {/* Bottom Bar Info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            fontSize: '16px',
            color: '#94a3b8',
            fontWeight: 600,
            zIndex: 10,
          }}
        >
          <div>DKI Jakarta • Sekretariat Jenderal BPP</div>
          <div style={{ color: '#D4AF37', fontWeight: 800 }}>https://bpp-gkii.vercel.app</div>
          <div>Bebas Akses Tanpa Login</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
