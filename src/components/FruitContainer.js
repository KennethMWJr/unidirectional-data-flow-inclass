import React, { Component } from 'react'
import FruitList from './FruitList'
import FruitFilter from './FruitFilter'

class FruitContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fruitsToDisplay: props.fruits,
            filterValue: '',
            unmatchedFruits: []
        }
        this.handleFilterChange = this.handleFilterChange.bind(this)
    }

    handleFilterChange(event) {
        event.preventDefault()
        const filterValue = event.currentTarget.value
        this.setState((prevState, props) => {
            const filteredFruits = props.fruits.filter( fruit =>
                fruit.toLowerCase().includes(filterValue.toLowerCase()))
            const unmatchedFruits = props.fruits.filter( fruit => 
                !fruit.toLowerCase().includes(filterValue.toLowerCase()))
        return {
            fruitsToDisplay: filteredFruits,
            unmatchedFruits,
            filterValue
            }
        })   
    }

    render() {
        return(
            <div>
                <FruitFilter value={this.state.filterValue} onChange={this.handleFilterChange} />
                <p>Matching Fruits:</p>
                <FruitList fruits={this.state.fruitsToDisplay} />
                <p>Unmatching Fruits:</p>
                <FruitList fruits={this.state.unmatchedFruits} />
            </div>
        )
    }

}

export default FruitContainer