import React from 'react'




const InputField = (props) => {
    

    return(
        <div className = 'col-1'>
            <input 
                    type={props.myType} 
                    value = {props.myValue ? Number(props.myValue) : 0}
                    onChange = {e => props.myHandleChange(e.target.value)}
                />
        </div>

    )

}

export default InputField