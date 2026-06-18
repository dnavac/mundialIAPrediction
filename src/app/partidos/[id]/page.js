import Link from 'next/link';
import matches from '../../data/matches.json';

export default async function MatchPrediction({ params }) {
  const { id } = await params;
  const matchData = matches.find(m => m.id === id);

  if (!matchData) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2 style={{ color: 'var(--loss-color)' }}>Partido no encontrado</h2>
        <Link href="/" style={{ color: 'var(--accent-secondary)', marginTop: '1rem', display: 'inline-block' }}>
          &larr; Volver a todos los partidos
        </Link>
      </div>
    );
  }

  const FormCircle = ({ result }) => {
    const color = result === 'W' ? 'var(--win-color)' : result === 'D' ? 'var(--draw-color)' : 'var(--loss-color)';
    return (
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: color,
        color: '#fff',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        margin: '0 2px'
      }}>
        {result}
      </span>
    );
  };

  return (
    <div>
      <Link href="/" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--accent-secondary)' }}>
        &larr; Volver a todos los partidos
      </Link>

      {/* Match Header */}
      <div className="card animate-fade-in" style={{ textAlign: 'center', padding: '3rem 1.5rem', backgroundImage: 'url(/ai_prediction_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(11, 14, 20, 0.85)', zIndex: 0 }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Mundial 2026 • {matchData.date} • {matchData.stadium}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
          <div style={{ flex: 1, textAlign: 'right' }}>
            <div style={{ fontSize: '5rem', lineHeight: '1' }}>{matchData.flag1}</div>
            <h2 style={{ fontSize: '2rem', margin: '1rem 0' }}>{matchData.team1}</h2>
            <div>
              {matchData.recentForm.team1.map((r, i) => <FormCircle key={i} result={r} />)}
            </div>
          </div>
          
          <div style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', fontWeight: '900', fontStyle: 'italic' }}>VS</div>
          
          <div style={{ flex: 1, textAlign: 'left' }}>
            <div style={{ fontSize: '5rem', lineHeight: '1' }}>{matchData.flag2}</div>
            <h2 style={{ fontSize: '2rem', margin: '1rem 0' }}>{matchData.team2}</h2>
            <div>
              {matchData.recentForm.team2.map((r, i) => <FormCircle key={i} result={r} />)}
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="ad-banner animate-fade-in delay-100">
        Espacio Publicitario AdSense (Bajo el Header)
      </div>

      {/* Written Analysis */}
      <div className="card animate-fade-in delay-200" style={{ marginBottom: '2rem' }}>
        <h2 className="section-title">Análisis del Partido</h2>
        <div style={{ color: 'var(--text-main)', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
          {matchData.analysis}
        </div>
      </div>

      {/* Statistics Table */}
      <div className="card animate-fade-in delay-300" style={{ marginBottom: '2rem' }}>
        <h2 className="section-title">Estadísticas (Últimos 5 partidos)</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>{matchData.team1}</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Estadística</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>{matchData.team2}</th>
            </tr>
          </thead>
          <tbody>
            {matchData.statistics.map((stat, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>{stat.team1}</td>
                <td style={{ padding: '1rem', color: 'var(--text-main)' }}>{stat.label}</td>
                <td style={{ padding: '1rem', fontWeight: 'bold', color: 'var(--accent-secondary)' }}>{stat.team2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Predictions Dashboard */}
      <h2 className="section-title animate-fade-in delay-300">Análisis y Predicción IA</h2>
      
      <div className="animate-fade-in delay-300" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        
        <div className="card" style={{ borderTop: '4px solid var(--accent-primary)' }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Ganador del Partido</h3>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text-main)' }}>{matchData.predictions.winner}</div>
          <div style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Confianza: {matchData.predictions.winnerProb}</div>
        </div>

        <div className="card" style={{ borderTop: '4px solid var(--accent-secondary)' }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Resultado Exacto</h3>
          <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '2px' }}>{matchData.predictions.exactScore}</div>
        </div>

      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <div className="card">
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Ambos Equipos Marcarán</div>
          <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{matchData.predictions.btts}</div>
        </div>
        <div className="card">
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Total de Goles</div>
          <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{matchData.predictions.overUnder}</div>
        </div>
        <div className="card">
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Tiros de Esquina</div>
          <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{matchData.predictions.corners}</div>
        </div>
        <div className="card">
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Tarjetas Totales</div>
          <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{matchData.predictions.cards}</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '1.5rem', background: 'rgba(0, 212, 255, 0.05)' }}>
        <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Posible Goleador</h3>
        <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--accent-secondary)' }}>{matchData.predictions.goalscorers}</div>
      </div>

      <div className="ad-banner">
        Espacio Publicitario AdSense (Final del Artículo)
      </div>
      
    </div>
  );
}
