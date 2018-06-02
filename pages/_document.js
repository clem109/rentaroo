import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head></Head>
        <body>
          <Main/>
          <NextScript/>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"/>
        </body>
      </html>
    )
  }
}