import React from 'react'

const FruitFilter = props => (
    <form>
        <label htmlFor="fruit-filter" >Filter the Fruits:</label>
        <input type="text" onChange={props.onChange} name="fruit-filter"/>
    </form>
)

export default FruitFilter