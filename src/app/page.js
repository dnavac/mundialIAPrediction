import Link from 'next/link';
import matches from './data/matches.json';

export default function Home() {
  return (
    <>
      <div className="card hero-bg animate-fade-in" style={{ padding: '4rem 2rem', textAlign: 'center', marginBottom: '2rem', border: 'none' }}>
        <div className="hero-content">
          <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', textShadow: '0 4px 10px rgba(0,0,0,0.8)' }}>
            El Mundial a Otro Nivel
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
            Predicciones exactas potenciadas por Inteligencia Artificial
          </p>
        </div>
      </div>

      <h2 className="section-title animate-fade-in delay-100">Próximos Partidos</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {matches.map((match, index) => (
          <Link href={`/partidos/${match.id}`} key={match.id} className={`card animate-fade-in`} style={{ display: 'flex', flexDirection: 'column', position: 'relative', animationDelay: `${(index + 2) * 100}ms` }}>
            <div style={{ fontSize: '0.875rem', color: 'var(--accent-secondary)', marginBottom: '1rem', fontWeight: '600' }}>
              {match.group} • {match.date}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', lineHeight: '1', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>{match.flag1}</div>
                <div style={{ fontWeight: '600', marginTop: '0.5rem' }}>{match.team1}</div>
              </div>
              <div style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>VS</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', lineHeight: '1', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>{match.flag2}</div>
                <div style={{ fontWeight: '600', marginTop: '0.5rem' }}>{match.team2}</div>
              </div>
            </div>
            
            <div className="prediction-highlight" style={{ 
              marginTop: 'auto',
              padding: '1rem', 
              backgroundColor: 'rgba(0, 255, 135, 0.05)', 
              borderRadius: '8px', 
              border: '1px solid rgba(0, 255, 135, 0.2)',
              textAlign: 'center'
            }}>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Pronóstico IA</span>
              <span style={{ color: 'var(--accent-primary)', fontWeight: '700', fontSize: '1.1rem' }}>{match.predictions.winner}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="ad-banner animate-fade-in delay-300">
        Espacio Publicitario AdSense (Home Footer)
      </div>
    </>
  );
}
