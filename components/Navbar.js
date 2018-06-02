export default class Navbar extends React.PureComponent {

  render() {
    return (
      <div className="hero-head ">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/>
              </a>
              <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" className="navbar-menu">
              <div className="navbar-end is-info">
                <a className="navbar-item">
                  Home
                </a>
                <a className="navbar-item">
                  Landlords
                </a>
                <a className="navbar-item">
                  Renters
                </a>
                <span className="navbar-item">
                  <a className="button is-info is-inverted">
                    <span>Register</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}