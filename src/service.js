export const getClima = async (latitude, longitude) => {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America/Argentina/Jujuy`);
        return response.json();
    } catch {
        throw new Error('The location does not exist.');
    }
};