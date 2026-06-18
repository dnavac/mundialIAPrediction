import './globals.css';

export const metadata = {
  title: 'MundialPredicciones IA - Mundial 2026',
  description: 'Predicciones precisas del Mundial 2026 generadas por Inteligencia Artificial. Resultados, goleadores, córners y más.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* AdSense Script Placeholder */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script>
      </head>
      <body>
        <header className="header">
          <div className="container header-content">
            <a href="/" className="logo">Mundial IA</a>
            <nav style={{ display: 'flex', gap: '1rem', fontWeight: '500' }}>
              <a href="/">Inicio</a>
              <a href="/grupos">Grupos</a>
              <a href="/estadisticas">Estadísticas</a>
            </nav>
          </div>
        </header>

        <main className="main container">
          {/* Header Ad Slot */}
          <div className="ad-banner">
            Espacio Publicitario AdSense (Header)
          </div>

          <div className="layout-grid">
            <div className="sidebar-ad">
              <span>AdSense<br/>(Skyscraper Izquierdo)</span>
            </div>
            
            <div className="content-area">
              {children}
            </div>

            <div className="sidebar-ad">
              <span>AdSense<br/>(Skyscraper Derecho)</span>
            </div>
          </div>

        </main>

        <footer style={{ backgroundColor: 'var(--card-bg)', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
          <div className="container">
            <p>&copy; 2026 MundialPredicciones IA. Todos los derechos reservados.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Predicciones generadas por Inteligencia Artificial basadas en datos estadísticos. Juega con responsabilidad.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
