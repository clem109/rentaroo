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
    const propById = getPropertyById(mockData, id)
    return {data: formatData(propById)}
  }

  render() {
    const {
      title,
      city,
      location,
      price,
      id,
      date,
      rooms,
      floor
    } = this.props.data
    console.log(this.props.data)
    return (
      <div>

        <section class="hero is-small is-primary is-bold">
          <Navbar/>

          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Flat in {city}, {location}
              </h1>
              <h2 class="subtitle">
                Price: {price}
                元
                <br/>
                Available: {date}
              </h2>
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="columns">
            <div className="column is-one-third">
              <Image id={id}/>
            </div>
            <div className="column is-two-thirds">
              <div className="columns is-one-half">
                <div className="column">
                  <Detail name="Adress" val={city + ', ' + location}/>
                  <Detail name="Floor" val={floor}/>
                </div>
                <div className="column is-one-half">
                  <Detail name="Rooms" val={rooms}/>
                  <Detail name={"Published date"} val={date}/>
                </div>
              </div>
              <div class="tags column is-one-half">
                <span class="tag">One</span>
                <span class="tag">Two</span>
                <span class="tag">Three</span>
                <span class="tag">Four</span>
                <span class="tag">Five</span>
                <span class="tag">Six</span>
                <span class="tag">Seven</span>
                <span class="tag">Eight</span>
                <span class="tag">Nine</span>
                <span class="tag">Ten</span>
                <span class="tag">Eleven</span>
                <span class="tag">Twelve</span>
                <span class="tag">Thirteen</span>
                <span class="tag">Fourteen</span>
                <span class="tag">Fifteen</span>
                <span class="tag">Sixteen</span>
                <span class="tag">Seventeen</span>
                <span class="tag">Eighteen</span>
                <span class="tag">Nineteen</span>
                <span class="tag">Twenty</span>
              </div>
              <div class="columns">
                <div class="tags column is-one-half"></div>

                <div class="tags column is-one-half">
                  <button
                    class="button is-link is-medium"
                    style={{
                    margin: "10px"
                  }}>Book</button>

                  <button
                    class="button is-link is-medium"
                    style={{
                    margin: "10px"
                  }}>View</button>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section container">
          <FakeContent/>
        </section>
      </div>
    )
  }

}
const Image = ({id}) => {
  return (<img src={"/static/img/room" + id + ".png"}/>)
}
const Detail = ({name, val}) => {
  if (name) {
    return (
      <div>
        <b>{name}</b>
        : {val}
      </div>
    )
  }
}

const FakeContent = () => {
  return (
    <div class="content">
      <h1>This is our appartment</h1>
      <p>Lorem ipsum<sup>
          <a>[1]</a>
        </sup>
        dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
        eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut
        vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum
        mattis neque. Sub<sub>script</sub>
        works as well!</p>
      <h2>Some more information</h2>
      <p>Curabitur accumsan turpis pharetra
        <strong>augue tincidunt</strong>
        blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin
        pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus
        lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
        <li>Ut non enim metus.</li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>One</th>
            <th>Two</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three</td>
            <td>Four</td>
          </tr>
          <tr>
            <td>Five</td>
            <td>Six</td>
          </tr>
          <tr>
            <td>Seven</td>
            <td>Eight</td>
          </tr>
          <tr>
            <td>Nine</td>
            <td>Ten</td>
          </tr>
          <tr>
            <td>Eleven</td>
            <td>Twelve</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const getPropertyById = (dat, id) => {
  return dat.filter((el) => el.id == id)[0]
}