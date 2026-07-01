import Link from 'next/link';

export const metadata = {
  title: 'Acerca de MundialPredicciones IA | Mundial 2026',
  description: 'Conoce MundialPredicciones IA: el sitio que utiliza Inteligencia Artificial para predecir resultados del Mundial 2026. Nuestra metodología, misión y tecnología.',
};

const stats = [
  { valor: '48', etiqueta: 'Partidos Cubiertos', icono: '⚽' },
  { valor: '32', etiqueta: 'Selecciones Analizadas', icono: '🌍' },
  { valor: '98%', etiqueta: 'Cobertura de Grupos', icono: '📊' },
  { valor: '2026', etiqueta: 'Mundial EE.UU. / CAN / MEX', icono: '🏆' },
];

const tecnologias = [
  {
    titulo: 'Análisis Estadístico Profundo',
    descripcion: 'Procesamos más de 500 variables por partido, incluyendo forma reciente, historial de enfrentamientos directos, rendimiento en torneos anteriores y condiciones del estadio.',
    icono: '📈',
  },
  {
    titulo: 'Modelos de Machine Learning',
    descripcion: 'Nuestros algoritmos de IA han sido entrenados con datos de más de 10,000 partidos internacionales, adaptándose continuamente a los resultados más recientes.',
    icono: '🤖',
  },
  {
    titulo: 'Predicciones en Tiempo Real',
    descripcion: 'Las predicciones se actualizan constantemente antes de cada partido, incorporando las últimas novedades sobre lesiones, alineaciones y condiciones climáticas.',
    icono: '⚡',
  },
  {
    titulo: 'Transparencia Total',
    descripcion: 'Cada predicción incluye porcentajes de confianza, posibles marcadores y métricas clave, para que puedas entender el razonamiento detrás de cada pronóstico.',
    icono: '🔍',
  },
];

const metodologia = [
  { paso: '01', titulo: 'Recopilación de Datos', desc: 'Reunimos datos históricos, estadísticas actuales y factores externos de múltiples fuentes confiables del fútbol mundial.' },
  { paso: '02', titulo: 'Procesamiento con IA', desc: 'Nuestros modelos analizan las variables y detectan patrones que influyen en el resultado final de cada encuentro.' },
  { paso: '03', titulo: 'Generación de Predicciones', desc: 'El sistema genera pronósticos detallados: ganador, marcador más probable, goleadores y estadísticas de partido.' },
  { paso: '04', titulo: 'Validación y Publicación', desc: 'Un equipo editorial revisa las predicciones antes de publicarlas, asegurando coherencia y calidad de la información.' },
];

export default function AcercaDe() {
  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,255,135,0.08) 0%, rgba(0,212,255,0.08) 100%)',
        border: '1px solid rgba(0,255,135,0.15)',
        borderRadius: '16px',
        padding: '4rem 2rem',
        marginBottom: '3rem',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏆</div>
        <h1 style={{
          fontSize: '2.8rem',
          fontWeight: '900',
          marginBottom: '1rem',
          background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.1,
        }}>
          Acerca de MundialPredicciones IA
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
          Somos el sitio de análisis y predicciones del <strong style={{ color: 'var(--text-main)' }}>Mundial de Fútbol 2026</strong> impulsado
          por Inteligencia Artificial. Transformamos datos complejos en pronósticos claros y accesibles para todos los aficionados.
        </p>
      </div>

      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem',
      }}>
        {stats.map((stat) => (
          <div key={stat.etiqueta} className="card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icono}</div>
            <div style={{
              fontSize: '2.2rem',
              fontWeight: '900',
              background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {stat.valor}
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{stat.etiqueta}</div>
          </div>
        ))}
      </div>

      {/* Misión */}
      <h2 className="section-title animate-fade-in delay-100">Nuestra Misión</h2>
      <div className="card animate-fade-in delay-200" style={{ marginBottom: '2.5rem' }}>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1rem' }}>
          En <strong style={{ color: 'var(--text-main)' }}>MundialPredicciones IA</strong> creemos que el fútbol es la pasión universal que
          une a millones de personas alrededor del mundo. El Mundial 2026, organizado por <strong style={{ color: 'var(--accent-secondary)' }}>
          Estados Unidos, Canadá y México</strong>, será el torneo más grande de la historia con 48 selecciones.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1rem' }}>
          Nuestra misión es llevar el análisis deportivo al siguiente nivel, combinando la pasión futbolística con el poder de la
          Inteligencia Artificial. Queremos que cada aficionado tenga acceso a predicciones fundamentadas, transparentes y de alta calidad,
          independientemente de su nivel de conocimiento técnico.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.05rem' }}>
          Todas las predicciones son generadas con fines <strong style={{ color: 'var(--accent-primary)' }}>informativos y de entretenimiento</strong>.
          El fútbol, por su naturaleza impredecible, siempre guarda sorpresas. Nuestro objetivo es enriquecer tu experiencia como espectador
          y analista, no sustituir el criterio humano.
        </p>
      </div>

      {/* Tecnología */}
      <h2 className="section-title animate-fade-in delay-100">Nuestra Tecnología</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem',
      }}>
        {tecnologias.map((tec, i) => (
          <div key={tec.titulo} className={`card animate-fade-in`} style={{ animationDelay: `${(i + 1) * 100}ms` }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{tec.icono}</div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
              {tec.titulo}
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              {tec.descripcion}
            </p>
          </div>
        ))}
      </div>

      {/* Metodología */}
      <h2 className="section-title animate-fade-in delay-100">Nuestra Metodología</h2>
      <div className="card animate-fade-in delay-200" style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {metodologia.map((m, i) => (
            <div key={m.paso} style={{
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start',
              paddingBottom: i < metodologia.length - 1 ? '1.5rem' : 0,
              borderBottom: i < metodologia.length - 1 ? '1px solid var(--card-border)' : 'none',
            }}>
              <div style={{
                minWidth: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '900',
                fontSize: '1rem',
                color: '#0b0e14',
                flexShrink: 0,
              }}>
                {m.paso}
              </div>
              <div>
                <h3 style={{ fontWeight: '700', marginBottom: '0.4rem', color: 'var(--text-main)' }}>{m.titulo}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{
        background: 'rgba(239, 68, 68, 0.06)',
        border: '1px solid rgba(239, 68, 68, 0.2)',
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '3rem',
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
      }}>
        <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>⚠️</div>
        <div>
          <h3 style={{ fontWeight: '700', color: '#ef4444', marginBottom: '0.5rem' }}>Aviso Importante</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
            Las predicciones publicadas en este sitio son generadas por algoritmos de Inteligencia Artificial y tienen carácter
            exclusivamente informativo y de entretenimiento. <strong style={{ color: 'var(--text-main)' }}>No promovemos ni
            incentivamos las apuestas deportivas</strong>. El fútbol es un deporte impredecible y los resultados reales pueden
            diferir significativamente de las predicciones. Juega con responsabilidad.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,255,135,0.08) 0%, rgba(0,212,255,0.08) 100%)',
        border: '1px solid rgba(0,255,135,0.2)',
        borderRadius: '16px',
        padding: '3rem 2rem',
        textAlign: 'center',
        marginBottom: '2rem',
      }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem' }}>
          ¿Listo para explorar las predicciones?
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem' }}>
          Descubre quién ganará cada grupo, quiénes serán los goleadores y mucho más.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{
            display: 'inline-block',
            padding: '0.875rem 2rem',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            color: '#0b0e14',
            fontWeight: '800',
            borderRadius: '8px',
            fontSize: '1rem',
            transition: 'opacity 0.2s ease',
          }}>
            Ver Predicciones ⚽
          </Link>
          <Link href="/grupos" style={{
            display: 'inline-block',
            padding: '0.875rem 2rem',
            background: 'transparent',
            color: 'var(--accent-primary)',
            fontWeight: '700',
            borderRadius: '8px',
            fontSize: '1rem',
            border: '2px solid var(--accent-primary)',
            transition: 'all 0.2s ease',
          }}>
            Ver Grupos 🌍
          </Link>
        </div>
      </div>

    </div>
  );
}
