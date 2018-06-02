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

    if (this.state.questionSet === 4) {
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

  if (number === 4) {
    return <QuestionFour/>
  }

  return <Complete/>
}

const BottomButtons = ({onClick, complete}) => {

  const showLink = (complete, onClick) => {
    complete
      ? <button class="button is-link is-medium" onClick={onClick}>Complete</button>
      : <button class="button is-link is-medium" onClick={onClick}>Next</button>
  }
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
          {complete
            ? <Link href="/">
                <button class="button is-link is-medium" onClick={onClick}>Complete</button>
              </Link>
            : <button class="button is-link is-medium" onClick={onClick}>Next</button>
}
        </div>
      </div>
    </div>
  )
}

const determineProgress = num => {
  const progressAmounts = {
    1: 20,
    2: 40,
    3: 60,
    4: 80,
    5: 100
  }

  return progressAmounts[num]
}
const titlesArray = ["Step 1: Start with the basics", "Step 2: Where are you at?", "Step 3: What ameneties do you have?", "Step 4: Upload some nice photos", "Congratulations you're all set!"]

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
    <div style={{
      flexDirection: "column",
      display: "flex"
    }}>
      <label
        class="checkbox"
        style={{
        padding: "20px",
        fontSize: "25px"
      }}>
        <input type="checkbox"/>
        Television
      </label>
      <label
        class="checkbox"
        style={{
        padding: "20px",
        fontSize: "25px"
      }}>
        <input type="checkbox"/>
        Wi-Fi
      </label>
      <label
        class="checkbox"
        style={{
        padding: "20px",
        fontSize: "25px"
      }}>
        <input type="checkbox"/>
        Swimming Pool
      </label>
      <label
        class="checkbox"
        style={{
        padding: "20px",
        fontSize: "25px"
      }}>
        <input type="checkbox"/>
        Breakfast Included
      </label>
      <label
        class="checkbox"
        style={{
        padding: "20px",
        fontSize: "25px"
      }}>
        <input type="checkbox"/>
        Heat
      </label>
      <label
        class="checkbox"
        style={{
        padding: "20px",
        fontSize: "25px"
      }}>
        <input type="checkbox"/>
        Towels Included
      </label>
    </div>
  )
}

const QuestionFour = () => {
  return (
    <div class="field">
      <div class="file is-centered is-boxed is-success has-name">
        <label class="file-label">
          <input class="file-input" type="file" name="resume"/>
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Centered file…
            </span>
          </span>
          <span class="file-name">
            Screen Shot 2017-07-29 at 15.54.25.png
          </span>
        </label>
      </div>
    </div>
  )
}
const Complete = () => {
  return (
    <div className="content" style={{
      marginTop: "50px"
    }}>
      <h3>You're now ready to rent out your appartment</h3>
      <p>Lorem ipsu dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus
        ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu
        lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel,
        interdum mattis neque. works as well!</p>
      <h3>Follow our easy to use process</h3>
      <p>Curabitur accumsan turpis pharetra blandit. Quisque condimentum maximus mi,
        sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis.
        Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at
        dignissim dui. Ut et neque nisl.</p>
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
        <li>Ut non enim metus.</li>
      </ul>
    </div>
  )
}