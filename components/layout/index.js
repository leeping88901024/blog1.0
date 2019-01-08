import Head from '../Head'
import Footer from './Footer'
import Navbar from './Navbar'

export default ({ children, title }) => (
  <div>
    <Head title={ title } />
    <header>
       <Navbar />
    </header>
    
    <div className="container has-gutter-top-bottom">
      { children }
    </div>

    <Footer />
  </div>
)