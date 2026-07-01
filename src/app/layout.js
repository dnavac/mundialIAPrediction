import './globals.css';
import Link from 'next/link';
import AdSenseInit from './components/AdSenseInit';

export const metadata = {
  title: 'MundialPredicciones IA - Mundial 2026',
  description: 'Predicciones precisas del Mundial 2026 generadas por Inteligencia Artificial. Resultados, goleadores, córners y más.',
  openGraph: {
    title: 'PredictionMatches',
    description: 'Predicciones del Mundial 2026 con IA',
    url: 'https://predictionmatches.com',
    siteName: 'PredictionMatches',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  // Nota: Para inicializar AdSense en páginas dinámicas, agrega esto en tus componentes cliente:
  // useEffect(() => {
  //   if (window.adsbygoogle) window.adsbygoogle.push({});
  // }, []);

  return (
    <html lang="es">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8609315549525650" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8609315549525650" crossOrigin="anonymous"></script>
      </head>
      <body>
        <AdSenseInit />
        <header className="header">
          <div className="container header-content">
            <Link href="/" className="logo">Mundial IA</Link>
            <nav style={{ display: 'flex', gap: '1rem', fontWeight: '500', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/">Inicio</Link>
              <Link href="/grupos">Grupos</Link>
              <Link href="/estadisticas">Estadísticas</Link>
              <Link href="/acerca-de">Acerca de</Link>
            </nav>
          </div>
        </header>

        <main className="main container">
          {/* Header Ad Slot */}
          <div className="ad-banner">
            <ins className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-8609315549525650"
              data-ad-slot="1234567890"
              data-ad-format="horizontal"></ins>
          </div>

          <div className="layout-grid">
            <div className="sidebar-ad">
              <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-8609315549525650"
                data-ad-slot="1234567891"
                data-ad-format="vertical"
                data-ad-height="600"
                data-ad-width="300"></ins>
            </div>
            
            <div className="content-area">
              {children}
            </div>

            <div className="sidebar-ad">
              <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-8609315549525650"
                data-ad-slot="1234567892"
                data-ad-format="vertical"
                data-ad-height="600"
                data-ad-width="300"></ins>
            </div>
          </div>

        </main>

        <footer style={{ backgroundColor: 'var(--card-bg)', padding: '2.5rem 0', textAlign: 'center', borderTop: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>Inicio</Link>
              <Link href="/grupos" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>Grupos</Link>
              <Link href="/estadisticas" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>Estadísticas</Link>
              <Link href="/acerca-de" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>Acerca de</Link>
              <Link href="/politica-de-privacidad" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>Política de Privacidad</Link>
            </div>
            <p>&copy; 2026 MundialPredicciones IA. Todos los derechos reservados.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Predicciones generadas por Inteligencia Artificial basadas en datos estadísticos. Juega con responsabilidad.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
