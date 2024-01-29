'use server'
export default async function getToken(){
    const client_id = '0c255169738f4ca7ba125fa1b269a4ff'
    const client_secret = 'b5153c414fc7460babb61af0cd3f925b'

        var authParam = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
        };

    try{
        const res = await fetch('https://accounts.spotify.com/api/token', authParam)
        const data = await res.json()
        return data
    } catch (error) {
        console.log('Erro ao obter o token de acesso', error)
    }
}