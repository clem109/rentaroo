import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {mockData} from '../mockData'
export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      questionSet: 1,
      complete: false
    }
  }

  onButtonClick = () => {

    if (this.state.questionSet === 3) {
      this.setState({
        complete: !this.state.complete
      })
    }
    this.setState({
      questionSet: this.state.questionSet + 1
    })
  }

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
          }}>{titlesArray[this.state.questionSet - 1]}</h1>

        </div>
        <div className="container" style={{
          paddingBottom: "60px"
        }}>

          <div class="columns">
            <div class="column is-three-quarters">

              <progress
                className="progress is-success"
                value={determineProgress(this.state.questionSet)}
                max="100"
                style={{
                margin: "15px 0px"
              }}>60%</progress>

              {renderQuestions(this.state.questionSet)}

              <BottomButtons onClick={this.onButtonClick} complete={this.state.complete}/>

            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

}

const renderQuestions = number => {
  if (number === 1) {
    return <QuestionsOne/>
  }
  if (number === 2) {
    return <QuestionTwo/>
  }
  if (number === 3) {
    return <QuestionThree/>
  }

  return <Complete/>
}

const BottomButtons = ({onClick, complete}) => {
  return (
    <div class="columns" style={{
      paddingTop: "60px"
    }}>
      <div class="column">
        <div class="control">
          <button class="button is-link is-medium">Back</button>
        </div>
      </div>
      <div class="column">
        <div class="control">
          <button class="button is-link is-medium" onClick={onClick}>{complete
              ? 'Complete'
              : "Next"}</button>
        </div>
      </div>
    </div>
  )
}

const determineProgress = num => {
  const progressAmounts = {
    1: 20,
    2: 50,
    3: 75,
    4: 100
  }

  return progressAmounts[num]
}
const titlesArray = ["Step 1: Start with the basics", "Step 2: Where are you at?", "Step 3: What ameneties do you have?", "Congratulations you're all set!"]

const QuestionsOne = () => {
  return (
    <div>
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
              <option>House</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">How many befrooms?</label>
        <div class="control is-large">
          <div class="select">
            <select>
              <option>1</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

const QuestionTwo = () => {
  return (
    <div>
      <div className="columns">
        <div className="column">
          <div class="field">
            <label class="label">State</label>
            <div class="control is-large">
              <div class="select">
                <input class="input is-medium" type="text" placeholder="Guangdong"/>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div class="field">
            <label class="label">City</label>
            <div class="control is-large">
              <div class="select">
                <input class="input is-medium" type="text" placeholder="Shenzhen"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Street Address</label>
        <div class="control is-large">
          <input class="input is-medium" type="text" placeholder="123 fake street"/>
        </div>
      </div>

      <div class="field">
        <label class="label">Appt, Suite, Bldg (optional)</label>
        <div class="control is-large">
          <input class="input is-medium" type="text" placeholder="appt 13"/>

        </div>
      </div>

    </div>
  )
}

const QuestionThree = () => {
  return (
    <div styles={{
      flexDirection: "column",
      display: "flex"
    }}>
      <label class="checkbox">
        <input type="checkbox"/>
        Television
      </label>
      <label class="checkbox">
        <input type="checkbox"/>
        Wi-Fi
      </label>
      <label class="checkbox">
        <input type="checkbox"/>
        Swimming Pool
      </label>
      <label class="checkbox">
        <input type="checkbox"/>
        Breakfast Included
      </label>
      <label class="checkbox">
        <input type="checkbox"/>
        Heat
      </label>
      <label class="checkbox">
        <input type="checkbox"/>
        Towels Included
      </label>
    </div>
  )

}
const Complete = () => {
  return (
    <h1>complete</h1>
  )

}