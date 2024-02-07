'use server'

const getSpotifyAccessToken = async (client_id : string, client_secret : string) => {
    try {
        const authParam = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
        };
    
        const response = await fetch('https://accounts.spotify.com/api/token', authParam);
        const data = await response.json();
    
        return data.access_token;
        } catch (error) {
        console.error('Erro ao obter o token de acesso do Spotify:', error);
        throw error;
        }
    };

export default getSpotifyAccessToken;