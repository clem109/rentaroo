const renderRooms = (nb) => ['single room + bathroom', 'two rooms + bathroom', 'three rooms + bathroom'][nb]
const renderFloor = (nb) => {
    if (nb > 1) { return nb + 'nd' } else { return nb + 'st' }
}


module.exports = {
    properties: [
        {
            title: "cheap flat",
            photo: "",
            location: "Beijing",
            price: "3000",
            id: "1",
            date: "24-06-2018",
            rooms: 0,
            floor: 3
        }, {
            photo: "",
            location: "Shanghai",
            price: "4000",
            id: "2",
            date: "23-06-2018",
            rooms: 2
        }, {
            photo: "",
            location: "Beijing",
            price: "3000",
            id: "3",
            date: "24-06-2018",
            rooms: 1,
            floor: 5
        }, {
            photo: "",
            location: "Shanghai",
            price: "4000",
            id: "4",
            date: "23-06-2018",
            rooms: 0,
            floor: 6
        }, {
            photo: "",
            location: "Beijing",
            price: "3000",
            id: "5",
            date: "24-06-2018",
            rooms: 1,
            floor: 21
        }, {
            photo: "",
            location: "Shanghai",
            price: "4000",
            id: "6",
            date: "23-06-2018",
            rooms: 2,
            floor: 3
        }
    ]

}