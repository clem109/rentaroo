var mockData = require('../mockData.js')
import Navbar from '../components/Navbar'

export default class extends React.Component {

  // example of getting house data static async getInitialProps({req, res, query})
  // {   const id = query.id   // const response = await
  // fetch('https://api.tvmaze.com/search/shows?q=batman')   // const data = await
  // response.json() from the ID find the correct json   return {shows: data} }
  static async getInitialProps({ req, res, query }) {
    req.id = 2
    const data = getPropertyById(mockData.properties, req.id)

    return {
      data: data
    }
  }



  render() {

    return (
      <div>
        <section className="hero is-info is-large">
          <Navbar />

        </section >
        <p>Property page</p>
        <div className="columns">
          <div className="column">

          </div>
          <div className="column">
            <div class="columns">
              Second col
            <div className="column">
                {detail("Address", this.props.data.location)}
              </div>
              <div className="column">
                {detail("Rooms", this.props.data.rooms)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

const detail = (name, val) => {
  return (
    <div>
      <b>{name}</b> : {val}
    </div>
  )
}

const getPropertyById = (data, id) => {
  return data.filter((el) => el.id == id)[0]
}