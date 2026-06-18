import Link from 'next/link';
import matches from '../data/matches.json';

export default function GruposPage() {

  // Agrupar los partidos por el campo 'group'
  const groupedMatches = matches.reduce((acc, match) => {
    const groupName = match.group || 'Fase Eliminatoria';
    if (!acc[groupName]) {
      acc[groupName] = [];
    }
    acc[groupName].push(match);
    return acc;
  }, {});

  // Ordenar grupos alfabéticamente
  const sortedGroups = Object.keys(groupedMatches).sort();

  return (
    <div className="animate-fade-in">
      <h1 className="section-title">Grupos del Mundial</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Explora las predicciones de la IA organizadas por cada grupo del torneo.
      </p>

      {sortedGroups.map((groupName, index) => (
        <div key={groupName} className="card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
            {groupName}
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {groupedMatches[groupName].map(match => (
              <Link href={`/partidos/${match.id}`} key={match.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: 'rgba(255,255,255,0.02)',
                borderRadius: '8px',
                border: '1px solid var(--card-border)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                  <span style={{ fontSize: '1.5rem' }}>{match.flag1}</span>
                  <span style={{ fontWeight: 'bold' }}>{match.team1}</span>
                </div>
                
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', padding: '0 1rem', textAlign: 'center' }}>
                  {match.date}<br/>
                  <span style={{ color: 'var(--accent-secondary)' }}>Pronóstico: {match.predictions?.winner || 'Pendiente'}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, justifyContent: 'flex-end' }}>
                  <span style={{ fontWeight: 'bold' }}>{match.team2}</span>
                  <span style={{ fontSize: '1.5rem' }}>{match.flag2}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
