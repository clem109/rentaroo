import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {mockData} from '../mockData'
export default class extends React.Component {

  // example of getting data

  render() {
    return (
      <div>
        <FullWidthImage/>
        <PropertyList properties={mockData}/>
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
            <a className="pagination-link " aria-label="Page 46" aria-current="page">11</a>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 47">12</a>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 86">20</a>
          </li>
        </ul>
      </nav>
    </div>
  )

}

const FullWidthImage = () => {
  return (
    <section className="hero is-primary is-medium is-bold">
      <Navbar/>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            We make finding a new place painless
          </h1>
          <p className="container">
            <div
              className="control"
              style={{
              padding: "10px 100px"
            }}>
              <input
                className="input is-large"
                type="text"
                placeholder="Discover something amazing..."/>
            </div>
          </p>
        </div>
      </div>
    </section>
  )
}

const PropertyList = ({properties}) => {
  return (
    <section className="section">
      <div className="container">
        {properties.map((property, index) => (
          <div>
            <PropertyDetail {...property}/>
            <hr/>
          </div>
        ))
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
        <Link href={`/property?id=${id}`}>
          <figure className="image" style={{
            width: "256px"
          }}>
            <img src={`../static/img/room${id}.jpg`}/>
          </figure>
        </Link>
      </div>
      <div className="column is-two-thirds ">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification">
              <p className="title">{location}
              </p>
              <p className="subtitle">{city}</p>
            </article>
            <article className="tile is-child notification">
              <p className="title">Price</p>
              <p className="subtitle">{price}
                元</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <p className="title">Information</p>
              <p className="subtitle">Here goes a short description about the apartment so
                that the user knows what they are looking at</p>
            </article>
          </div>
        </div>

      </div>
    </div>
  )
}
