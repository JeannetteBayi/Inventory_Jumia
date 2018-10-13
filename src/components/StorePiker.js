
import React from 'react';
import { getFunName } from '../helpers'
class StorePiker extends React.Component {

    myInput = React.createRef();
    /*
    constructor() {
        super()
        //binding this to the method so that it will be used inside user defined function
        this.goToStore = this.goToStore.bind(this)
    }
    */

    //bing using props rather than a function
    // you declare a function as a property and use arrow function
    // it will be bind with this by defauld


    goToStore = (envent) => {
        //1. prevent the form from submitting
        envent.preventDefault();
        
        //2. Getting user input
        const storeName =  this.myInput.value.value

        //3. change the page to store/whaterver-they-entered
        this.props.history.push(`/store/${storeName}`);

    }


    render() {
        return (

            < React.Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <p> Enter the store please!!</p>
                    <input
                     type="text" value="default" 
                     placeholder="Strore Name" 
                     defaultValue={getFunName()} 
                     ref={this.myInput} />
                    <button type="submit"> Visit Store-></button>
                </form>

            </ React.Fragment>
        )



    }

}

export default StorePiker;