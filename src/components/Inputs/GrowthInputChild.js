import React, {useEffect} from 'react';
import {useStockContext} from '../../context'

function GrowthInputChild (props) {

    const {fullData} = useStockContext()

    useEffect(() => {
        
      
    }, [fullData])
    return (
        <label>{props.name}: 
            <input 
                type="text" 
                value = {props.value}
                onChange = {e => props.setFunc(e.target.value)}
            />
        </label>
    )
}

export default GrowthInputChild