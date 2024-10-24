import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
        {
            role: "user",
            parts: [
                { text: "Genera un plan de viaje para la ubicación: Cuso, por 3 días para 1 persona con un presupuesto de 5000 soles, dame una lista de opciones de hotel con el nombre del hotel, la dirección del hotel y el precio, también sugiere un itinerario con el nombre del lugar, los detalles del lugar. con un plan para cada día con el mejor horario para visitar en formato JSON." },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\"hotel_options\": [{\"name\": \"Hotel Cuso Plaza\", \"address\": \"Av. Principal 123, Cuso\", \"price\": \"S/ 150 - S/ 200\"}, {\"name\": \"Hostal La Cabaña\", \"address\": \"Calle Los Andes 456, Cuso\", \"price\": \"S/ 80 - S/ 120\"}, {\"name\": \"Posada El Dorado\", \"address\": \"Jr. San Martín 789, Cuso\", \"price\": \"S/ 100 - S/ 150\"}], \"itinerary\": [{\"day\": \"Día 1\", \"schedule\": [{\"time\": \"9:00 AM\", \"activity\": \"Visita al Complejo Arqueológico de Cuso\", \"details\": \"Explora las ruinas de la antigua ciudad incaica, con impresionantes estructuras de piedra y terrazas.\", \"url\": \"https://www.google.com/maps/place/Complejo+Arqueol%C3%B3gico+de+Cuso/@-12.0833,-75.0167,17z/data=!3m1!4b1!4m5!3m4!1s0x9105a864184533b3:0x7914c2817a1f1b89!8m2!3d-12.0833!4d-75.0167\"}, {\"time\": \"12:00 PM\", \"activity\": \"Almuerzo en el restaurante local 'El Fogón'\", \"details\": \"Disfruta de un almuerzo típico de la región, con platos como el cuy chactado o el adobo.\", \"url\": \"https://www.google.com/maps/place/El+Fog%C3%B3n/@-12.0833,-75.0167,17z/data=!3m1!4b1!4m5!3m4!1s0x9105a864184533b3:0x7914c2817a1f1b89!8m2!3d-12.0833!4d-75.0167\"}, {\"time\": \"2:00 PM\", \"activity\": \"Paseo por la Plaza de Armas\", \"details\": \"Relájate en la plaza principal del pueblo, rodeado de coloridos edificios y fuentes.\", \"url\": \"https://www.google.com/maps/place/Plaza+de+Armas+de+Cuso/@-12.0833,-75.0167,17z/data=!3m1!4b1!4m5!3m4!1s0x9105a864184533b3:0x7914c2817a1f1b89!8m2!3d-12.0833!4d-75.0167\"}]}, {\"day\": \"Día 2\", \"schedule\": [{\"time\": \"9:00 AM\", \"activity\": \"Excursión a la Laguna de Cuso\", \"details\": \"Descubre esta laguna cristalina, rodeada de montañas y con una vista impresionante.\", \"url\": \"https://www.google.com/maps/place/Laguna+de+Cuso/@-12.0833,-75.0167,17z/data=!3m1!4b1!4m5!3m4!1s0x9105a864184533b3:0x7914c2817a1f1b89!8m2!3d-12.0833!4d-75.0167\"}, {\"time\": \"1:00 PM\", \"activity\": \"Visita a la Casa Museo de Cuso\", \"details\": \"Conoce la historia del pueblo y su cultura, a través de objetos y fotografías antiguas.\", \"url\": \"https://www.google.com/maps/place/Casa+Museo+de+Cuso/@-12.0833,-75.0167,17z/data=!3m1!4b1!4m5!3m4!1s0x9105a864184533b3:0x7914c2817a1f1b89!8m2!3d-12.0833!4d-75.0167\"}, {\"time\": \"6:00 PM\", \"activity\": \"Cena en el restaurante 'La Casona'\", \"details\": \"Degusta la cocina local en un ambiente cálido y acogedor.\", \"url\": \"https://www.google.com/maps/place/La+Casona/@-12.0833,-75.0167,17z/data=!3m1!4b1!4m5!3m4!1s0x9105a864184533b3:0x7914c2817a1f1b89!8m2!3d-12.0833!4d-75.0167\"}]}, {\"day\": \"Día 3\", \"schedule\": [{\"time\": \"9:00 AM\", \"activity\": \"Caminata por el sendero de las cataratas\", \"details\": \"Recorre un sendero natural que te llevará a disfrutar de hermosas cascadas.\", \"url\": \"https://www.google.com/maps/place/Cataratas+de+Cuso/@-12.0833,-75.0167,17z/data=!3m1!4b1!4m5!3m4!1s0x9105a864184533b3:0x7914c2817a1f1b89!8m2!3d-12.0833!4d-75.0167\"}, {\"time\": \"1:00 PM\", \"activity\": \"Visita a la feria artesanal local\", \"details\": \"Compra productos hechos a mano por artesanos locales, como tejidos, cerámica y souvenirs.\", \"url\": \"https://www.google.com/maps/place/Feria+Artesanal+de+Cuso/@-12.0833,-75.0167,17z/data=!3m1!4b1!4m5!3m4!1s0x9105a864184533b3:0x7914c2817a1f1b89!8m2!3d-12.0833!4d-75.0167\"}, {\"time\": \"6:00 PM\", \"activity\": \"Cena en el restaurante 'La Taberna'\", \"details\": \"Disfruta de una cena tradicional en este restaurante con ambiente familiar.\", \"url\": \"https://www.google.com/maps/place/La+Taberna/@-12.0833,-75.0167,17z/data=!3m1!4b1!4m5!3m4!1s0x9105a864184533b3:0x7914c2817a1f1b89!8m2!3d-12.0833!4d-75.0167\"}]}]}\n\n```" },
            ],
        },
    ],
});

export const PROMPT = "Genera un plan de viaje para la ubicación: {location}, por {days} días con un presupuesto de {money} soles, dame una lista de opciones de hotel con el nombre del hotel, la dirección del hotel, valoración y el precio en formato 'S/. valor1 - valor2' o 'S/. valor1', también sugiere un itinerario con el nombre del lugar, los detalles del lugar y link de ubicación de google maps para {days} días. con un plan para cada día con el mejor horario para visitar en formato JSON."