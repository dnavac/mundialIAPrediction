/**
 * AI Prediction Worker (Automated Pipeline)
 * 
 * Flujo:
 * 1. Obtiene los próximos partidos (y estadísticas) desde API-Football usando tu llave.
 * 2. Llama a Vertex AI (Gemini) para generar la predicción estructurada.
 * 3. Guarda la predicción final directamente en Supabase.
 */

import { createClient } from '@supabase/supabase-js';
import { GoogleGenAI } from '@google/genai';

// --- TUS CREDENCIALES ---
const API_FOOTBALL_KEY = "a65eb12e74348a98c37ba5a7d736de11";
const supabaseUrl = process.env.SUPABASE_URL || "PENDIENTE";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "PENDIENTE"; 
const geminiApiKey = process.env.GEMINI_API_KEY || "PENDIENTE";

async function fetchNextMatches() {
  console.log('[Worker] Buscando próximos partidos en API-Football...');
  try {
    // Ejemplo de llamada a la API de fixtures para mañana (Simplificado para el Mundial)
    // Para el entorno real de producción, ajustarías los IDs de liga y fechas.
    const response = await fetch("https://v3.football.api-sports.io/fixtures?league=1&next=2", {
      method: 'GET',
      headers: {
        "x-rapidapi-key": API_FOOTBALL_KEY,
        "x-rapidapi-host": "v3.football.api-sports.io"
      }
    });
    
    if (!response.ok) throw new Error("Error conectando con API-Football");
    
    const data = await response.json();
    console.log(`[Worker] Se encontraron ${data.response?.length || 0} partidos.`);
    return data.response || [];
  } catch (error) {
    console.error("[Worker] Error extrayendo datos:", error);
    return [];
  }
}

async function processMatch(apiMatchData) {
  const team1 = apiMatchData.teams?.home?.name || 'Local';
  const team2 = apiMatchData.teams?.away?.name || 'Visitante';
  const matchDate = new Date(apiMatchData.fixture?.date).toLocaleDateString();
  const stadium = apiMatchData.fixture?.venue?.name || 'Estadio Mundialista';

  console.log(`[Worker] Iniciando análisis IA para: ${team1} vs ${team2}`);

  try {
    const ai = new GoogleGenAI({ apiKey: geminiApiKey });

    const prompt = `
      Eres un analista experto de fútbol mundial.
      Analiza el siguiente partido: ${team1} vs ${team2}.
      Fecha: ${matchDate}
      Estadio: ${stadium}
      
      Genera una predicción detallada y un análisis táctico como si tuvieras sus estadísticas de los últimos 5 partidos.
      IMPORTANTE: Tu respuesta debe ser ÚNICAMENTE un JSON válido, sin texto adicional.
      
      Plantilla:
      {
        "id": "${team1.toLowerCase().replace(/ /g,'-')}-vs-${team2.toLowerCase().replace(/ /g,'-')}",
        "team1": "${team1}",
        "team2": "${team2}",
        "flag1": "🚩", 
        "flag2": "🚩",
        "date": "${matchDate}",
        "time": "18:00",
        "group": "Fase de Grupos",
        "stadium": "${stadium}",
        "analysis": "Escribe aquí el análisis largo...",
        "recentForm": { "team1": ["W","D","L","W","W"], "team2": ["D","D","W","L","W"] },
        "statistics": [ { "label": "Goles", "team1": "1.5", "team2": "2.0" } ],
        "predictions": { "winner": "...", "winnerProb": "...", "exactScore": "...", "btts": "...", "overUnder": "...", "corners": "...", "cards": "...", "goalscorers": "..." }
      }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-1.5-pro',
      contents: prompt,
    });

    const jsonString = response.text().replace(/```json/g, '').replace(/```/g, '').trim();
    const predictionRecord = JSON.parse(jsonString);

    console.log('[Worker] IA generó la predicción exitosamente.');

    // Guardar en Supabase
    if (supabaseUrl !== "PENDIENTE") {
      const supabase = createClient(supabaseUrl, supabaseKey);
      await supabase.from('matches').upsert(predictionRecord);
      console.log('[Worker] Guardado en Supabase.');
    } else {
      console.log('[Worker] Simulación completada. Configura Supabase para guardar permanentemente.');
    }

  } catch (error) {
    console.error(`[Worker] Error procesando ${team1} vs ${team2}:`, error);
  }
}

async function runAutoPilot() {
  const matches = await fetchNextMatches();
  for (const match of matches) {
    await processMatch(match);
  }
  console.log('[Worker] Ciclo de automatización finalizado.');
}

// Ejecutar automatización si se llama el script
runAutoPilot();
