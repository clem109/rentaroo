import Link from 'next/link'
export default class extends React.Component {

  // example of getting data

  render() {

    return (
      <div>
        <FullWidthImage/>
        <PropertyList properties={properties}/>
      </div>
    )
  }

}

const FullWidthImage = () => {
  return (
    <div>
      <h1>IMAGE HERE
      </h1>
    </div>
  )
}

const PropertyList = ({properties}) => {
  return (
    <div>
      {properties.map((property, index) => (<PropertyDetail
        key={property.id}
        photo={property.photo}
        location={property.location}
        price={property.price}
        date={property.date}
        id={property.id}/>))
}
    </div>
  )
}

const PropertyDetail = ({photo, location, price, date, id}) => {
  return (
    <div>
      <h1>{price}</h1>
    </div>
  )
}

const properties = [
  {
    photo: "",
    location: "Beijing",
    price: "3000",
    id: "1",
    date: "24-06-2018"
  }, {
    photo: "",
    location: "Shanghai",
    price: "4000",
    id: "2",
    date: "23-06-2018"
  }
]