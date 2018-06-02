import Link from 'next/link'

export default class extends React.Component {

  // example of getting data

  render() {

    return (
      <div>
        <p>Hello Next.js</p>
        <Link href="/property">
          <button class="button is-primary">Click me</button>

        </Link>
      </div>
    )
  }

}
