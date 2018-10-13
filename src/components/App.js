import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
import base from '../base'

//states are created in high level components
//which is the APP components for our case
//then state data are passed all the way down
class App extends React.Component {

    state = {
        fishes: {},
        order: {}

    }

    componentDidMount() {

        const { params } = this.props.match
        //reinstate our local storage
        const localStorageRef = localStorage.getItem(params.storeId)

        if (localStorageRef) {

            //use a json parse to convert a string representation into a json object
            this.setState({ order: JSON.parse(localStorageRef) })
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })
    }

    componentWillUnmount() {

        base.removeBinding(this.ref)
    }

    componentDidUpdate() {

        //use JSON.stringfy to convert an object into a string represantion
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
    }
    addFish = (fish) => {

        //taking a copy
        const fishes = { ...this.state.fishes }

        //add a new fish to existing fishes
        fishes[`fish${Date.now()}`] = fish

        //set the new fishes object to state4
        this.setState({
            fishes: fishes
        })
    }

    loadSampleFishes = () => {

        this.setState({
            fishes: sampleFishes
        })
        console.log(this.state.fishes)
    }

    addToOrder = (key) => {

        //1. take a copy of state
        const order = { ...this.state.order }


        //2. Either add to the order or update the number
        order[key] = order[key] + 1 || 1

        //3. call set state to update our object
        this.setState({ order })


    }

    removeFromOrder = (key) => {

        //1. take a copy of state
        const order = { ...this.state.order }


        //2. Remove that Item from order
        delete order[key] 

        //3. call set state to update our object
        this.setState({ order })


    }

    updateFish = (key, updatedFish) => {

        // 1. Take a copy of current state
        const fishes = { ...this.state.fishes }

        // 2. Update that state
        fishes[key] = updatedFish

        // 3. set that to a state
        this.setState({ fishes: fishes })


    }

    deleteFish = (key) => {

        // 1. Take a copy of current state
        const fishes = { ...this.state.fishes }
        // remove the fish by setting its value to null
        fishes[key] = null
        // update the state
        this.setState({ fishes: fishes })


    }


    render() {

        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh SeaFood Market" age={20} />
                    <ul className="fishes">

                        {Object.keys(this.state.fishes).map(key =>
                            <Fish
                                key={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                                index={key}

                            />)}
                    </ul>

                </div>

                <Order 
                fishes={this.state.fishes} 
                order={this.state.order} 
                removeFromOrder = {this.removeFromOrder}
                />

                <Inventory
                    addFish={this.addFish}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes} 
                    storeId={this.props.match.params.storeId}
                    />
            </div>

        );
    }

}

export default App;