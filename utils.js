


const renderRooms = (nb) => ['single room + bathroom', 'two rooms + bathroom', 'three rooms + bathroom'][nb]
const renderFloor = (nb) => {
    if (nb == 1) { return '1st' }
    else if (nb == 2) { return '2nd' }
    else if (nb == 3) { return '3rd' }
    else { return nb + 'th' }
}

const formatData = (prop) => {
    prop.rooms = renderRooms(prop.rooms)
    console.log(prop.room)
    prop.floor = renderFloor(prop.floor)
    return prop
}

export { formatData }