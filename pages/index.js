import Link from 'next/link'
import Navbar from '../components/Navbar'
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
    <section className="hero is-info is-large">
      <Navbar/>

      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">
            Rentaroo
          </p>
          <p className="container">
            <div className="control">
              <input className="input is-focused" type="text" placeholder="Search now..."/>
            </div>
          </p>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Beijing</a>
              </li>
              <li>
                <a>Shanghai</a>
              </li>
              <li>
                <a>Shenzhen</a>
              </li>
              <li>
                <a>Chengdu</a>
              </li>
              <li>
                <a>Guangzhou</a>
              </li>
              <li>
                <a>Xian</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  )
}

const PropertyList = ({properties}) => {
  return (
    <section className="section">
      <div className="container">
        {properties.map((property, index) => (<PropertyDetail
          key={property.id}
          photo={property.photo}
          location={property.location}
          price={property.price}
          date={property.date}
          id={property.id}/>))
}
      </div>
    </section>
  )
}

const PropertyDetail = ({photo, location, price, date, id}) => {
  return (
    <div className="columns" style={{
      padding: "20px"
    }}>
      <div className="column">
        <figure className="image" style={{
          width: "256px"
        }}>
          <img src="https://bulma.io/images/placeholders/256x256.png"/>
        </figure>
      </div>
      <div className="column">
        Price: {price}
        元
      </div>
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
  }, {
    photo: "",
    location: "Beijing",
    price: "3000",
    id: "3",
    date: "24-06-2018"
  }, {
    photo: "",
    location: "Shanghai",
    price: "4000",
    id: "4",
    date: "23-06-2018"
  }, {
    photo: "",
    location: "Beijing",
    price: "3000",
    id: "5",
    date: "24-06-2018"
  }, {
    photo: "",
    location: "Shanghai",
    price: "4000",
    id: "6",
    date: "23-06-2018"
  }
]