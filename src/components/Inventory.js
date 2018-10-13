import React from 'react'
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'
import Login from './Login'
import firebase from 'firebase'
import base, { firebaseApp } from '../base'
import PropTypes from 'prop-types'

class Inventory extends React.Component {


    //setting the initial state
    state = {
        uid: null,
        owner: null
    }

    //componene validation
    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        loadSampleFishes: PropTypes.func

    }

    //
    //componentDidMount() {
        //firebase.auth().onAuthStateChanged(user => {
           // if (user) {
               // this.authHandler(user)
           // }
       // })
    //}


    //user authentication with either facebook, github or twitter
    authenticate = (provider) => {
        //const authProvider =  new firebase.auth.GithubAuthProvider()
        const authProvider = new firebase.auth[`${provider}AuthProvider`]()
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler)
        //alert(provider)
    }


    authHandler = async (authData) => {

        //1. lookup the current store in database
        const store = await base.fetch(this.props.storeId, { context: this })

        //2. claim it if there is no owner

        if (!store.owner) {
            await base.post(`${this.props.storeId}/owner`, { data: authData.user.uid })
        }


        //set the state of the inventory component to reflect the current user
        this.setState(
            {
                uid: authData.user.uid,
                owner: store.owner || authData.user.uid
            }
        )
    }

    logout = async () => {
        console.log();
        await firebase.auth().signOut()
        this.setState({ uid: null })
    }

    render() {

        const logout = <button onClick={this.logout}>Log Out!</button>


        // 1. check if they are logged in
        if (!this.state.uid) {
            return <Login authenticate={this.authenticate} />
        }

        // 2. check if they are the owner of the store
        if (this.state.owner !== this.state.uid) {

            return (
                <div>
                    <p>
                        You are not the owner of this Inventory
                        {logout}

                    </p>
                </div>
            )
        }


        // 3. use object.keys to turn an object into an array before we map it
        // They must be the owner, just render the inventory
        return (
            <div className="inventory">
                <h2>
                    Inventory

                    {logout}

                </h2>
                {Object.keys(this.props.fishes).map(key =>
                    <EditFishForm
                        key={key}
                        index={key}
                        fish={this.props.fishes[key]}
                        updateFish={this.props.updateFish}
                        deleteFish={this.props.deleteFish}
                    />
                )}

                <AddFishForm
                    addFish={this.props.addFish}
                />

                <button
                    onClick={this.props.loadSampleFishes}>
                    Load Sample Fishes
                 </button>
            </div>
        )
    }



}

export default Inventory;