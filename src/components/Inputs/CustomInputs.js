import React from 'react'
import InputField from './InputField'



const CustomInput = (props) => {

    return(
        <div className='row'>
                <div className = {`col-4 colHeader inputLeftBorder ${props.myClass}`}>{props.description}</div>
                <div className = {`col-1 ${props.myClass}`}>{props.fiveYear}</div>
                <div className = {`col-1 ${props.myClass}`}>{props.threeYear}</div>
                <div className = {`col-1 inputRightBorder ${props.myClass}`}>{props.oneYear}</div>
                <div className = 'col-1 '></div>
                <InputField 
                    myType = {props.inputType}
                    myValue = {props.inputValue}
                    myHandleChange = {props.inputFunc}
                />
                {/* <div className = 'col-1'>
                    <input 
                            type={props.inputType}
                            value = {props.inputValue}
                            onChange = {e => props.inputFunc(e.target.value)}
                        />
                </div> */}
                <div className = 'col-3'></div>
        </div>
    )

}

export default CustomInput