import React, {useState} from 'react'

function TestComponent() {
    fetch(`https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL`).then(res => res.json()).then(res => console.log('test function ran', res))

    return(
        <div>
            Test Component
        </div>
    )

}
export default TestComponent