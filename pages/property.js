import {mockData} from '../mockData.js'
import {formatData} from '../utils.js'
import Navbar from '../components/Navbar'

export default class extends React.Component {

  // example of getting house data static async getInitialProps({req, res, query})
  // {   const id = query.id   // const response = await
  // fetch('https://api.tvmaze.com/search/shows?q=batman')   // const data = await
  // response.json() from the ID find the correct json   return {shows: data} }
  static async getInitialProps({req, res, query}) {
    let id = query.id
      ? query.id
      : 1
    var data = getPropertyById(mockData, id)
    data = formatData(data)
    return data
  }

  render() {

    return (
      <div>

        <section class="hero is-small is-primary is-bold">
          <Navbar/>

          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Flat in {this.props.city}, {this.props.location}
              </h1>
              <h2 class="subtitle">
                Price: {this.props.price}
                元
                <br/>
                Available: {this.props.date}
              </h2>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="columns" style={{
            padding: "20px"
          }}>
            <div className="column is-one-third">
              {Image(this.props.id)}
            </div>
            <div className="column is-two-thirds">
              <div className="columns">
                <div className="column">
                  {Detail("Address", this.props.location)}
                  {Detail("Floor", this.props.floor)}
                </div>
                <div className="column">
                  {Detail("Rooms", this.props.rooms)}
                  {Detail("Published date", this.props.date)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

}
const Image = (id) => {
  return (<img src={"/static/img/room" + id + ".jpg"}/>)
}
const Detail = (name, val) => {
  return (
    <div>
      <b>{name}</b>
      : {val}
    </div>
  )
}

const getPropertyById = (data, id) => {
  return data.filter((el) => el.id == id)[0]
}