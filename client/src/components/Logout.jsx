import React from 'react'
import {Button} from '@auth0/styleguide-react-components'

const Logout = props => (

    <section className="react-component-page">
        <div className="component-information">
            <h1 className="component-title">Logout</h1>
            <p className="component-description">
                Logs out of your Auth0 account</p>
            <br/>
            <Button bsStyle="danger" onClick={() => props.onLogout()}>Logout</Button>
        </div>
    </section>
)

export default Logout
