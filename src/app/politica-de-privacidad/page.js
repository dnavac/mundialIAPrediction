export const metadata = {
  title: 'Política de Privacidad | MundialPredicciones IA',
  description: 'Política de privacidad de MundialPredicciones IA. Conoce cómo recopilamos, usamos y protegemos tu información personal.',
};

export default function PoliticaDePrivacidad() {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,255,135,0.08) 0%, rgba(0,212,255,0.08) 100%)',
        border: '1px solid rgba(0,255,135,0.15)',
        borderRadius: '16px',
        padding: '3rem 2rem',
        marginBottom: '2.5rem',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          marginBottom: '0.75rem',
          background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Política de Privacidad
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
          Última actualización: 1 de julio de 2026
        </p>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Intro */}
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
            1. Introducción
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Bienvenido a <strong style={{ color: 'var(--text-main)' }}>MundialPredicciones IA</strong> (en adelante, "el Sitio"), accesible desde{' '}
            <strong style={{ color: 'var(--accent-secondary)' }}>predictionmatches.com</strong>. Esta Política de Privacidad describe
            cómo recopilamos, usamos, almacenamos y protegemos la información de los usuarios que visitan nuestro sitio web.
            Al utilizar este sitio, aceptas los términos descritos en esta política.
          </p>
        </div>

        {/* Datos que recopilamos */}
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
            2. Información que Recopilamos
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            Este sitio no requiere registro de usuario ni recopila información personal directamente. Sin embargo, podemos recopilar
            información de forma automática a través de tecnologías estándar de la web:
          </p>
          <ul style={{ color: 'var(--text-muted)', lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li><strong style={{ color: 'var(--text-main)' }}>Datos de uso:</strong> Páginas visitadas, tiempo de permanencia, clics y navegación dentro del sitio.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Información técnica:</strong> Dirección IP (anonimizada), tipo de navegador, sistema operativo y dispositivo.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Cookies:</strong> Archivos pequeños almacenados en tu dispositivo para mejorar la experiencia de navegación.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Datos de publicidad:</strong> Google AdSense puede recopilar información para personalizar anuncios.</li>
          </ul>
        </div>

        {/* Google AdSense y Cookies */}
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
            3. Google AdSense y Publicidad
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            Utilizamos <strong style={{ color: 'var(--text-main)' }}>Google AdSense</strong> para mostrar anuncios en este sitio.
            Google AdSense utiliza cookies para mostrar anuncios relevantes basados en tus visitas previas a este y otros sitios web.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            Google, como proveedor externo, utiliza cookies para publicar anuncios en nuestro sitio. El uso de la cookie DART por
            parte de Google le permite publicar anuncios a los usuarios basándose en su visita a nuestro sitio y otros sitios de Internet.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Los usuarios pueden inhabilitar el uso de la cookie DART visitando la{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-secondary)', textDecoration: 'underline' }}
            >
              Política de Privacidad de Google para la Red de Contenido y Anuncios
            </a>.
          </p>
        </div>

        {/* Cookies */}
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
            4. Uso de Cookies
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio. Utilizamos cookies para:
          </p>
          <ul style={{ color: 'var(--text-muted)', lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Analizar el tráfico y el comportamiento de los usuarios (Google Analytics).</li>
            <li>Mostrar anuncios personalizados (Google AdSense).</li>
            <li>Recordar preferencias de usuario.</li>
            <li>Mejorar el rendimiento y la funcionalidad del sitio.</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '1rem' }}>
            Puedes controlar y/o eliminar las cookies según desees. Para más detalles, visita{' '}
            <a
              href="https://www.aboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-secondary)', textDecoration: 'underline' }}
            >
              aboutcookies.org
            </a>.
            Puedes eliminar todas las cookies que ya están en tu computadora y puedes configurar la mayoría de los navegadores
            para que no las acepten.
          </p>
        </div>

        {/* Uso de la información */}
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
            5. Uso de la Información
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            La información que recopilamos se utiliza exclusivamente para:
          </p>
          <ul style={{ color: 'var(--text-muted)', lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Analizar y mejorar el rendimiento del sitio web.</li>
            <li>Personalizar la experiencia del usuario.</li>
            <li>Mostrar publicidad relevante a través de Google AdSense.</li>
            <li>Cumplir con obligaciones legales.</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '1rem' }}>
            <strong style={{ color: 'var(--text-main)' }}>No vendemos, alquilamos ni compartimos</strong> tu información personal
            con terceros, salvo en los casos descritos en esta política o cuando sea requerido por ley.
          </p>
        </div>

        {/* Terceros */}
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
            6. Servicios de Terceros
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            Podemos utilizar servicios de terceros que recopilan información de forma independiente. Estos incluyen:
          </p>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {[
              { nombre: 'Google AdSense', uso: 'Publicidad personalizada', link: 'https://policies.google.com/privacy' },
              { nombre: 'Google Analytics', uso: 'Análisis de tráfico web', link: 'https://policies.google.com/privacy' },
            ].map((servicio) => (
              <div key={servicio.nombre} style={{
                padding: '1rem',
                background: 'rgba(0,255,135,0.04)',
                borderRadius: '8px',
                border: '1px solid rgba(0,255,135,0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                <div>
                  <strong style={{ color: 'var(--text-main)' }}>{servicio.nombre}</strong>
                  <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem', fontSize: '0.9rem' }}>— {servicio.uso}</span>
                </div>
                <a
                  href={servicio.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-secondary)', fontSize: '0.85rem', textDecoration: 'underline' }}
                >
                  Ver política
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Derechos */}
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
            7. Tus Derechos
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            Dependiendo de tu ubicación, puedes tener los siguientes derechos respecto a tus datos:
          </p>
          <ul style={{ color: 'var(--text-muted)', lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li><strong style={{ color: 'var(--text-main)' }}>Acceso:</strong> Solicitar qué datos personales tenemos sobre ti.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Rectificación:</strong> Solicitar la corrección de datos inexactos.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Eliminación:</strong> Solicitar la eliminación de tus datos.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Oposición:</strong> Oponerte al procesamiento de tus datos para ciertos fines.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Portabilidad:</strong> Recibir tus datos en un formato estructurado.</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '1rem' }}>
            Para ejercer cualquiera de estos derechos, contáctanos en: <strong style={{ color: 'var(--accent-secondary)' }}>privacidad@predictionmatches.com</strong>
          </p>
        </div>

        {/* Seguridad */}
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
            8. Seguridad de la Información
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado,
            pérdida o divulgación. Sin embargo, ningún método de transmisión por Internet es 100% seguro, por lo que no podemos
            garantizar su seguridad absoluta.
          </p>
        </div>

        {/* Cambios */}
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
            9. Cambios en esta Política
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios serán publicados
            en esta página con la fecha de actualización correspondiente. Te recomendamos revisar esta política periódicamente.
            El uso continuado del sitio después de cualquier modificación constituye tu aceptación de los nuevos términos.
          </p>
        </div>

        {/* Contacto */}
        <div className="card" style={{
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, rgba(0,255,135,0.05) 0%, rgba(0,212,255,0.05) 100%)',
          border: '1px solid rgba(0,255,135,0.2)',
        }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
            10. Contáctanos
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Si tienes preguntas o comentarios sobre esta Política de Privacidad, puedes contactarnos en:
          </p>
          <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
            <p style={{ color: 'var(--text-main)', fontWeight: '600' }}>MundialPredicciones IA</p>
            <p style={{ color: 'var(--accent-secondary)', marginTop: '0.25rem' }}>privacidad@predictionmatches.com</p>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.25rem', fontSize: '0.9rem' }}>predictionmatches.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}
