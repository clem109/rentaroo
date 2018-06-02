import Link from 'next/link'

export default class extends React.Component {

  // example of getting data

  render() {

    return (
      <div>
        <p>Hello Next.js</p>
        <Link href="/property">
          <a>Click me</a>
        </Link>
      </div>
    )
  }

}
