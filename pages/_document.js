// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <meta name="description" content="Hi, I'm Marlo. Nice to meet you. I'm a UCLA Alumni and Front-End & Back-End Developer whose passion is building and tinkering with things for the web."></meta>
        <link href="https://fonts.googleapis.com/css?family=Muli:400,600|Ovo&display=swap" rel="stylesheet"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png"></link>
        <link rel="manifest" href="/static/favicon/site.webmanifest"></link>
        <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;