export const formatOrderIdentifier = string => {
    const long = string.length
    if (long > 3) {
        return string.slice(long - 3, long)
    } else if (long < 3) {
        if (long === 1) {
            return `00${string}`
        } else {
            return `0${string}`
        }
    } else {
        return string
    }
}

export const getLastOrderStatusList = (array) => {
    let list = []
    array.map(({ order_status_type }) =>
        list.push(order_status_type._id)
    )
    return list
}