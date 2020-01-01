import React from 'react'
import {useStockContext} from '../../context'

function Form () {

    const {searchStock, setSearchStock} = useStockContext()
   


    const handleSubmit = (e) => {
        e.preventDefault()
                
        console.log(searchStock)
        // search.setSearchStock('')

        fetch(`https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL`).then(res => {console.log(res)})
      }

    return(
        <form onSubmit = {handleSubmit}>
            <label>Enter Symbol: 
                <input 
                    type="text" 
                    value = {searchStock}
                    onChange = {e => setSearchStock(e.target.value)}
                />
            </label>

            <label>
                <input type='submit' value='submit' />
            </label>
        </form>
    )
}

export default Form