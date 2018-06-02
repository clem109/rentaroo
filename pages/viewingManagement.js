import { mockViewing } from '../mockData.js'
import { formatData } from '../utils.js'
import Navbar from '../components/Navbar'

export default class extends React.Component {

  // example of getting house data static async getInitialProps({req, res, query})
  // {   const id = query.id   // const response = await
  // fetch('https://api.tvmaze.com/search/shows?q=batman')   // const data = await
  // response.json() from the ID find the correct json   return {shows: data} }
  static async getInitialProps({ req, res, query }) {
    let id = query.id ? query.id : 1
    const propById = getPropertyById(mockViewing, id)
    return { data: formatData(propById) }
  }



  render() {
    const { id, mobile, name, timeslot } = this.props.data
    console.log(this.props.data)
    return (
      <div>
        <section className="hero is-info is-large">
          <Navbar />

        </section >
        <section className="section" style={{ paddingLeft: "40px" }} >
          <div className="container">
            <h3 class="title" >Vewing Management</h3>
            <div className="columns" >
              <div className="column is-one-third"   >
                <Image id={id} />
                <Detail name="Name" val={name} />
                <Detail name="Phone" val={mobile} />
              </div>
              <div className="column is-one-third">
                <Detail name="Avaibilities" val={timeslot} />
              </div>
              <div className="column is-one-third" style={{ verticalAlign: "middle" }}>
                <div><a class="button is-success is-rounded">Accept</a></div>
                <div><a class="button is-danger is-rounded">Refuse</a></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" style={{ paddingLeft: "40px" }}>
          <div className="container">
            <h3 class="title">Payments</h3>
          </div>
        </section>
      </div >
    )
  }

}
const Image = ({ id }) => {
  return (
    <img width={243 * 0.4} height={241 * 0.4} style={{ borderRadius: 241 * 0.5 }} src={"/static/img/user" + id + ".jpg"} />
  )
}
const Detail = ({ name, val }) => {
  if (name) {
    return (
      <div>
        <b>{name}</b> : {val}
      </div>
    )
  }
}


const getPropertyById = (dat, id) => {
  return dat.filter((el) => el.id == id)[0]
}

