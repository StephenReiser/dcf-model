import React, {useEffect} from 'react';
import {useStockContext} from '../../context'

function GrowthInputChild (props) {

    // const {fullData} = useStockContext()

    // useEffect(() => {
        
      
    // }, [fullData])
    return (
        <div className = 'row'>
            <div className = 'col-5'>{props.name}</div>
            <div className = 'col-2'>{props.value}</div>
            <div className = 'col-1'>
            <input 
                    type="number" 
                    value = {props.adj}
                    onChange = {e => props.adjFunc(e.target.value)}
                />
                </div>
            <div className = 'col-1'>
            <input 
                    type="number" 
                    value = {props.input}
                    onChange = {e => props.inputFunc(e.target.value)}
                />
                </div>
            <div className = 'col-3'></div>
          </div>
    )
}

export default GrowthInputChild