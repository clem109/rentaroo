import Link from 'next/link'

export default class Navbar extends React.PureComponent {

  render() {
    return (
      <div className="hero-head ">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link href="/">
                <a className="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/>
                </a>
              </Link>
              <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" className="navbar-menu">
              <div className="navbar-end is-info">
                <Link href="/">
                  <a className="navbar-item">
                    Home
                  </a>
                </Link>
                <Link href="/landlords">
                  <a className="navbar-item">
                    Landlords
                  </a>
                </Link>
                <Link href="/renters">
                  <a className="navbar-item">
                    Renters
                  </a>
                </Link>
                <Link href="/register">
                  <span className="navbar-item">
                    <a className="button is-info is-inverted">
                      <span>Register</span>
                    </a>
                  </span>
                </Link>

              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}