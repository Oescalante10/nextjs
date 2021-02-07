export const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000)
    const now = new Date()

    let hours = now.getHours()-date.getHours();

    return {
        created_at: `${date.getHours()}:${date.getMinutes()}`,
        minutes: `${now.getMinutes()-date.getMinutes()+(Math.abs(hours)*60)}m`
    }
}