import React from 'react'
import PropTypes from 'prop-types'

class AddFishForm extends React.Component {

    //data validation
    static propTypes = {
        addFish: PropTypes.func
    }

    //referencing form components
    nameRef = React.createRef()
    priceRef = React.createRef()
    statusRef = React.createRef()
    descRef = React.createRef()
    imageRef = React.createRef()

    createFish = (event) => {

        //prevent default relaoding
        event.preventDefault()

        const fish = {

            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            imag: this.imageRef.value.value,

        }

        this.props.addFish(fish);
        console.log(fish);


    }

    render() {

        return (

            <form className='fish-edit' onSubmit={this.createFish}>

                <input name='name' type='text' ref={this.nameRef} placeholder='name' />

                <input name='price' type='text' ref={this.priceRef} placeholder='price' />

                <select name='status' ref={this.statusRef}>

                    <option available>    Fresh</option>
                    <option unavailable> Sold Out </option>

                </select>

                <textarea name='desc' ref={this.descRef} placeholder='desc' />

                <input name='image' type='text' ref={this.imageRef} placeholder='image' />

                <button type='submit'> + Add Fish</button>


            </form>
        )
    }



}

export default AddFishForm;