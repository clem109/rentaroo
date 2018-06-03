import { mockViewing } from '../mockData.js'
import { formatData } from '../utils.js'
import Navbar from '../components/Navbar'

export default class extends React.Component {

  // example of getting house data static async getInitialProps({req, res, query})
  // {   const id = query.id   // const response = await
  // fetch('https://api.tvmaze.com/search/shows?q=batman')   // const data = await
  // response.json() from the ID find the correct json   return {shows: data} }
  static async getInitialProps({ req, res, query }) {
    let id = query.id ? query.id : [1, 2, 3]
    const propById = getObjectById(mockViewing, id)
    return { data: formatData(propById) }
  }



  render() {
    return (
      <div>
        <section className="hero is-small is-primary  has-bg-img">
          <Navbar isLoggedIn={true} />

        </section >
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <nav class="panel">
                <p class="panel-heading">
                  My flat
              </p>
                <a class="panel-block is-active">
                  <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                  </span>
                  Viewing Requests
               </a>
                <a class="panel-block">
                  <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                  </span>
                  Payments
              </a>
                <a class="panel-block">
                  <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                  </span>
                  Settings
              </a>
              </nav>


            </div>

            <div className="column is-three-quarter">
              <h3 class="title" >Viewing Requests</h3>
              <ViewRequest info={this.props.data[0]} /><hr />
              <ViewRequest info={this.props.data[1]} /><hr />
              <ViewRequest info={this.props.data[2]} /><hr />
            </div>
          </div>



          <section className="section" style={{ paddingLeft: "40px" }}>
            <div className="container">
              <h3 class="title">Payments</h3>
            </div>
          </section>
        </div >
      </div>
    )
  }

}

const ViewRequest = ({ info }) => {
  const { id, mobile, name, date, timeSlot } = info
  //timeslot_ = timeSlot[0] + '/' + timeSlot[1] + '/' + timeSlot[2]
  return (
    < section className="section" style={{ paddingLeft: "40px" }} >
      <div className="columns" >
        <div class="column is-three-quarters">
          <div class="columns">
            <div className="column is-one-third"   >
              <Image id={id} />
              <Detail name="Name" val={name} />
              <Detail name="Phone" val={mobile} />
            </div>
            <div className="column is-two-thirds">
              <DetailDate name="Avaibilities" date={date} timeSlot={timeSlot} />
            </div>
            <div className="column is-one-third" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div><a class="button is-success is-rounded" style={{ marginBottom: 10 }} > Accept</a></div>
              <div><a class="button is-danger is-rounded">Refuse</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Image = ({ id }) => {
  const Width = 243
  return (
    <img width={Width * 0.4} height={Width * 0.4} style={{ borderRadius: Width * 0.2 }} src={"/static/img/user" + id + ".jpg"} />
  )
}
const DetailDate = ({ date, timeSlot }) => {
  var timeSlot2 = timeSlot + 1
  timeSlot += ':00'
  timeSlot2 += ':00'
  const date1 = date[0] + '/' + date[1] + '/' + date[2] + ' from ' + timeSlot + ' to ' + timeSlot2
  return (
    <div>
      <b>Avaibilities</b> : <br />
      {date1}
    </div>
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


const getObjectById = (dat, id) => {
  return dat.filter((el) => id.includes(el.id))
  console.log(dat[1])
}

