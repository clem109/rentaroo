import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {mockData} from '../mockData'
export default class extends React.Component {

  // example of getting data

  render() {
    return (
      <div>
        <section className="hero is-primary is-large">
          <Navbar/>
        </section >
        <div className="container">
          <h1
            className="title is-large"
            style={{
            marginTop: "15px"
          }}>Step 1: Start with the basics</h1>

        </div>
        <Content/>
        <Footer/>
      </div>
    )
  }

}
const Content = () => {

  return (
    <div className="container">

      <div class="columns">
        <div class="column is-three-quarters">

          <progress
            className="progress is-success"
            value="10"
            max="100"
            style={{
            margin: "15px 0px"
          }}>60%</progress>
          <div class="field">
            <label class="label">First, let's narrow things down</label>
            <div class="control is-large">
              <div class="select">
                <select>
                  <option>Select one</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Now, choose a property type</label>
            <div class="control is-large">
              <div class="select">
                <select>
                  <option>Select one</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>
          <BottomButtons/>

        </div>
      </div>
    </div>
  )
}

const BottomButtons = () => {
  return (
    <div class="columns">
      <div class="column">
        <div class="control">
          <button class="button is-link is-medium">Back</button>
        </div>
      </div>
      <div class="column">
        <div class="control">
          <button class="button is-link is-medium">Next</button>
        </div>
      </div>
    </div>
  )
}