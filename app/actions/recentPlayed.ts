export const RecentPlayed: any[] = []; 

export function addToRecentPlayed(param: any) {
    const updatedRecentPlayedItem = {
        name: param.name,
        id: param.id,
        album: param.album,
        artist: param.album?.artists?.[0]?.name
    };

    RecentPlayed.push(updatedRecentPlayedItem);
    console.log(RecentPlayed);
}