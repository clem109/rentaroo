


const renderRooms = (nb) => {
    if (nb > 0 && nb < 3) {
        return ['single room + bathroom', 'two rooms + bathroom', 'three rooms + bathroom'][nb]
    }
    else { return 'single room' }
}
const renderFloor = (nb) => {
    if (nb == 1) { return '1st' }
    else if (nb == 2) { return '2nd' }
    else if (nb == 3) { return '3rd' }
    else if (nb > 0 && nb < 999) { return nb + 'th' }
    else { return '17th' }
}

const formatData = (prop) => {
    let ret = Object.assign({}, prop)
    ret.rooms = renderRooms(ret.rooms)
    ret.floor = renderFloor(ret.floor)
    return ret
}

export { formatData }