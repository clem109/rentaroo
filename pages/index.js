export default class extends React.Component {

  // example of getting data
  static async getInitialProps({req, res, query}) {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await response.json()

    return {shows: data}
  }

  render() {

    return (
      <div>
        <p>Hello Next.js</p>
      </div>
    )
  }

}
