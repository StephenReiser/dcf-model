import React from 'react'


const ValuationComponent = (props) => {

    return(
        <div className = 'row'>
            <div className = 'col-8'>
                {props.description}
            </div>
            <div className = 'col-4'>
                {props.myValue}
            </div>

        </div>
    )

}

export default ValuationComponent