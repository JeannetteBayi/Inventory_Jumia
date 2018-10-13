
import React from 'react'

class EdiFishForm extends React.Component {

    handleChange = (event)=> {

       // 1. take a copy of current fish
       const updatedFish =  {...this.props.fish ,
    
    [event.currentTarget.name]: event.currentTarget.value}

    this.props.updateFish(this.props.index, updatedFish)

    }
    render() {
        return <React.Fragment>
            <div className='fish-edit'>

                <input
                    name='name' type='text'
                    onChange={this.handleChange}
                    value={this.props.fish.name}
                />

                <input
                    name='price' type='text'
                    onChange={this.handleChange}
                    value={this.props.fish.price}
                />

                <select
                    name='status'
                    onChange={this.handleChange}
                    value={this.props.fish.status}
                >

                    <option available>    Fresh</option>
                    <option unavailable> Sold Out </option>

                </select>

                <textarea
                    name='desc'
                    onChange={this.handleChange}
                    value={this.props.fish.desc}
                />

                <input
                    name='image'
                    type='text'
                    onChange={this.handleChange}
                    value={this.props.fish.image}
                />

                <button onClick={()=>this.props.deleteFish(this.props.index)} >Remove Fish</button>

            </div>
        </React.Fragment>

    }

}

export default EdiFishForm;