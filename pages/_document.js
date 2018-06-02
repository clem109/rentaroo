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

// FontAWesome <link rel="stylesheet"
// href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
// integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58
// N9jp" crossorigin="anonymous"/>