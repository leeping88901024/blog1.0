import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body className='loading'>
          <Main />
          <NextScript />
          <script src="js/multiboxmenu-imagesloaded.pkgd.min.js"></script>
					<script src="js/multiboxmenu-TweenMax.min.js"></script>
          <script src="js/multiboxmenu-demo.js"></script>
        </body>
      </html>
    )
  }
}