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
        <Content/>
        <Footer/>
      </div>
    )
  }

}
const Content = () => {

  return (
    <h1>CONTENT GOES HERE FOR THE REGISTER</h1>
  )
}