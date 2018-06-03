import Link from 'next/link'

export default class Navbar extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  toggleModal = () => {
    this.setState({
      isActive: !this.state.isActive
    })

  }


  render() {

    return (
      <div className="hero-head ">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link href="/">
                <a className="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                </a>
              </Link>
              <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" className="navbar-menu">
              {Buttons(this.props.isLoggedIn)}
            </div>
          </div>
        </nav>
        <RegisterModal isActive={this.state.isActive} onClick={this.toggleModal} />
      </div>
    )
  }
}

const Buttons = (loggedIn) => {
  if (!loggedIn) {
    return (
      <div className="navbar-end is-info">
        <Link href="/">
          <a className="navbar-item" style={{ color: "white", fontWeight: "bold" }}>
            Home
        </a>
        </Link>
        <Link href="/viewingManagement">
          <a className="navbar-item" style={{ color: "white", fontWeight: "bold" }}>
            Login
        </a>
        </Link>
        <span className="navbar-item">
          <a className="button is-info is-inverted" onClick={this.toggleModal}>
            <span>Register</span>
          </a>
        </span>
      </div>
    )
  }
  else {
    return (
      <div className="navbar-end is-info ">
        <Link href="/">
          <span className="navbar-item">
            <a className="button is-info is-inverted">
              <span>My flat</span>
            </a>
          </span>
        </Link>
      </div>
    )
  }
}


const RegisterModal = ({ isActive, onClick }) => {

  return (
    <div className={`modal ${isActive
      ? 'is-active'
      : ""}`}>
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Register to Rentaroo</p>
          <button class="delete" aria-label="close" onClick={onClick}></button>
        </header>
        <section class="modal-card-body">
          <label class="label">Full name</label>
          <div class="field">
            <div class="control">
              <input class="input is-medium" type="text" placeholder="Chuck Norris" />
            </div>
          </div>
          <div class="field">
            <label class="label">E-mail</label>

            <div class="control">
              <input class="input is-medium" type="e-mail" placeholder="email@gmail.com" />
            </div>
          </div>
          <div class="field">
            <label class="label">Telephone</label>

            <div class="control">
              <input class="input is-medium" type="telephone" placeholder="+86 123 456 789" />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>

            <div class="control">
              <input class="input is-medium" type="password" placeholder="********" />
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-info is-inverted">Rent a place</button>
          <button class="button is-info " onClick={onClick}>
            <Link href="/register">
              List my place
            </Link>
          </button>

        </footer>
      </div>
    </div>

  )
}
