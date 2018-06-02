import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default class extends React.Component {

  // example of getting data

  render() {

    return (
      <div>
        <FullWidthImage/>
        <PropertyList properties={properties}/>
        <Pagination/>
        <Footer/>
      </div>
    )
  }

}

const Pagination = () => {
  return (
    <div className="container" style={{
      paddingBottom: "30px"
    }}>
      <nav
        className="pagination is-rounded"
        role="navigation"
        aria-label="pagination">
        <a className="pagination-previous">Previous</a>
        <a className="pagination-next">Next page</a>
        <ul className="pagination-list">
          <li>
            <a className="pagination-link is-current" aria-label="Goto page 1">1</a>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 45">10</a>
          </li>
          <li>
            <a className="pagination-link " aria-label="Page 46" aria-current="page">12</a>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 47">12</a>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 86">20</a>
          </li>
        </ul>
      </nav>
    </div>
  )

}

const FullWidthImage = () => {
  return (
    <section className="hero is-primary is-large">
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
          city={property.city}
          price={property.price}
          date={property.date}
          id={property.id}
          title={property.title}/>))
}
      </div>
    </section>
  )
}

const PropertyDetail = ({
  photo,
  location,
  price,
  date,
  id,
  title,
  city
}) => {
  return (
    <div className="columns" style={{
      padding: "20px"
    }}>
      <div className="column is-one-third">
        <figure className="image" style={{
          width: "256px"
        }}>
          <img src="https://bulma.io/images/placeholders/256x256.png"/>
        </figure>
      </div>
      <div className="column is-two-thirds ">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification">
              <p class="title">{location}</p>
              <p class="subtitle">{city}</p>
            </article>
            <article class="tile is-child notification">
              <p class="title">Price</p>
              <p class="subtitle">{price}
                元</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <p class="title">Information</p>
              <p class="subtitle">Here goes a short description about the apartment so that
                the user knows what they are looking at</p>
            </article>
          </div>
        </div>

      </div>
    </div>
  )
}

// <div className="tile is-parent"> <article className="tile is-child
// notification is-primary">   <p className="title">{title + " "}     in
// {location}</p>   <div className="content">     <p>Lorem ipsum dolor sit amet,
// consectetur adipiscing elit. Proin ornare magna       eros, eu pellentesque
// tortor vestibulum ut. Maecenas non massa sem. Etiam       finibus odio quis
// feugiat facilisis.</p>   </div> </article> </div>

const properties = [
  {
    photo: "",
    title: "Gorgeous 3 bedroom appartment",
    city: "Beijing",
    location: "Dongzhimen",
    price: "3000",
    id: "1",
    date: "24-06-2018"
  }, {
    photo: "",
    title: "Gorgeous 3 bedroom appartment",
    city: "Beijing",
    location: "Sanlitun",
    price: "4000",
    id: "2",
    date: "23-06-2018"
  }, {
    photo: "",
    title: "Gorgeous 3 bedroom appartment",
    city: "Beijing",
    price: "3000",
    location: "Liudaokou",
    id: "3",
    date: "24-06-2018"
  }, {
    photo: "",
    title: "Gorgeous 3 bedroom appartment",
    city: "Beijing",
    price: "4000",
    id: "4",
    location: "Yonghegong",
    date: "23-06-2018"
  }, {
    photo: "",
    title: "Gorgeous 3 bedroom appartment",
    city: "Beijing",
    price: "3000",
    id: "5",
    location: "Anlilu",
    date: "24-06-2018"
  }, {
    photo: "",
    title: "Gorgeous 3 bedroom appartment",
    city: "Beijng",
    location: "Xizhimen",
    price: "4000",
    id: "6",
    date: "23-06-2018"
  }
]