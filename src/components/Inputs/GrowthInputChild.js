import React from 'react';
import InputField from './InputField'
// import {useStockContext} from '../../context'

function GrowthInputChild (props) {

    // const {fullData} = useStockContext()

    // useEffect(() => {
        
      
    // }, [fullData])
    return (
        <div className = 'row'>
            <div className = 'col-4'>{props.name}</div>
            <div className = 'col-1'>{props.fiveYearValue}</div>
            <div className = 'col-1'>{props.value}</div>
            <div className = 'col-1'>{props.oneYear}</div>
            <InputField 
                myType = {"number"}
                myValue = {props.adj}
                myHandleChange = {props.adjFunc}
            />
            <InputField 
                myType = {"number"}
                myValue = {props.input}
                myHandleChange = {props.inputFunc}
            />
            
            <div className = 'col-3'></div>
          </div>
    )
}

export default GrowthInputChild