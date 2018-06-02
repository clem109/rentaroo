


const renderRooms = (nb) => ['single room + bathroom', 'two rooms + bathroom', 'three rooms + bathroom'][nb]
const renderFloor = (nb) => {
    if (nb == 1) { return '1st' }
    else if (nb == 2) { return '2nd' }
    else if (nb == 3) { return '3rd' }
    else { return nb + 'th' }
}

const formatData = (prop) => {
    let ret = Object.assign({}, prop)
    ret.rooms = renderRooms(ret.rooms)
    ret.floor = renderFloor(ret.floor)
    return ret
}

export { formatData }