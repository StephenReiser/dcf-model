import React from 'react'


const ValuationComponent = (props) => {

    return(
        <div className = {`row ${props.myStyle || "valuationRow"}`}>
            <div className = 'col-6 '>
                {props.description}
            </div>
            <div className = 'col-6 alignRight'>
                {props.myValue}
            </div>

        </div>
    )

}

export default ValuationComponent