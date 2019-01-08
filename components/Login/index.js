import Head from '../Head'
import LoginForm from './LoginForm'

export default ({ title }) => (
    <div>
        <Head title={title} />
        <section className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)