import React from 'react'
import PropTYpes from 'prop-types'
class Login extends React.Component {

   

    render() {
        return (
            <React.Fragment>
                <nav className='login'> Inventory Login
                     <button className='github' onClick={() => this.props.authenticate('Github')}> Login With Github</button>
                    <button className='facebook' onClick={() => this.props.authenticate('Facebook')}> Login With Facebook</button>
                    <button className='twitter' onClick={() => this.props.authenticate('Twitter')}> Login With Twitter</button>
                </nav>
            </React.Fragment>
        );
        
    }
}

Login.propTYpes = {
    authenticate: PropTYpes.func.isRequired
}
export default Login;