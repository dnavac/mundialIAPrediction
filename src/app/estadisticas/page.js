import matches from '../data/matches.json';

export default function EstadisticasPage() {

  // Calcular métricas básicas
  const totalMatches = matches.length;
  
  // Extraer todos los ganadores pronosticados
  const winners = matches
    .map(m => m.predictions?.winner)
    .filter(w => w && w !== 'Empate');
    
  // Contar qué equipo tiene más pronósticos de victoria
  const winnerCounts = winners.reduce((acc, team) => {
    acc[team] = (acc[team] || 0) + 1;
    return acc;
  }, {});
  
  // Encontrar el equipo con más victorias proyectadas
  let topFavorite = "N/A";
  let maxWins = 0;
  for (const [team, wins] of Object.entries(winnerCounts)) {
    if (wins > maxWins) {
      maxWins = wins;
      topFavorite = team;
    }
  }

  // Contar promedio de goles (basado en 'overUnder')
  const highScoringMatches = matches.filter(m => 
    m.predictions?.overUnder?.toLowerCase().includes('más de')
  ).length;

  return (
    <div className="animate-fade-in">
      <h1 className="section-title">Centro de Datos y Estadísticas</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Análisis macroscópico del torneo generado a partir de las predicciones de nuestra Inteligencia Artificial.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        
        <div className="card" style={{ textAlign: 'center', borderTop: '4px solid var(--accent-primary)' }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Gran Favorito IA</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-main)' }}>{topFavorite}</div>
          <div style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>Con {maxWins} victorias proyectadas</div>
        </div>

        <div className="card" style={{ textAlign: 'center', borderTop: '4px solid var(--accent-secondary)' }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Partidos Analizados</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-main)' }}>{totalMatches}</div>
          <div style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>En la base de datos</div>
        </div>

        <div className="card" style={{ textAlign: 'center', borderTop: '4px solid var(--win-color)' }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Tendencia de Goles</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-main)' }}>{highScoringMatches}</div>
          <div style={{ color: 'var(--win-color)', fontSize: '0.9rem' }}>Partidos proyectados con "Más de 2.5 goles"</div>
        </div>

      </div>

      <div className="ad-banner animate-fade-in delay-200">
        Espacio Publicitario AdSense (Bajo estadísticas)
      </div>

      <div className="card animate-fade-in delay-300">
        <h2 style={{ marginBottom: '1rem' }}>Metodología</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          Nuestro motor predictivo procesa millones de puntos de datos, incluyendo rachas históricas, 
          rendimiento individual de jugadores y métricas avanzadas (xG, xA) obtenidas a través de la API de Football. 
          Estos datos son ingeridos por Gemini 1.5 Pro, un modelo fundacional avanzado entrenado para razonamiento 
          lógico, que emite probabilidades matemáticas y redacta el análisis táctico de cada encuentro.
        </p>
      </div>
    </div>
  );
}
