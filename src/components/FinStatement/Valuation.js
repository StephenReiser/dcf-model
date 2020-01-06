import React, {useEffect} from 'react'
import {useStockContext} from '../../context'


function Valuation () {

    const {fiveYearProjection, discRate, eMultiplier, shares} = useStockContext()

    let myDCF = 0
    let terminalDCF = 0
    if (fiveYearProjection) {
        // myDCF = fiveYearProjection.map(year=>year.UFCF).reduce((a, b) => a+b)
        console.log(fiveYearProjection.map(year=>year.UFCF))
        myDCF = fiveYearProjection.map(year => year.UFCF).reduce((a, b, i) => a + (b / Math.pow((1 + discRate/100), i+1)), 0)

        terminalDCF = fiveYearProjection[fiveYearProjection.length-1].ebitda / Math.pow((1 + discRate/100),fiveYearProjection.length) * eMultiplier
        

        // need to subtract netDebt from terminalDCF then this is good to go!

    } else {
        myDCF = 0
    }
    
    
    useEffect(() => {
        // if (fiveYearProjection) {
        //     // myDCF = fiveYearProjection.reduce((a, b) => a + Number(b['UFCF']), 0) 
        //     myDCF = (fiveYearProjection[0].UFCF)  
        // }
        
    },[fiveYearProjection, discRate, eMultiplier, shares])

    return (
        <>
        <div className = 'row'>
            My DCF: {Number(myDCF.toFixed(0)).toLocaleString()}
            
        </div>
        <div className='row'    >
            Terminal DCF: {Number(terminalDCF.toFixed(0)).toLocaleString()}
            
        </div>
        <div className = 'row'>
            Total Value: {Number((myDCF + terminalDCF).toFixed(0)).toLocaleString()}
        </div>
        <div className = 'row'>
            Shares Outstanding: {shares ? Number((shares/1000000).toFixed(0)).toLocaleString() : 0}
        </div>
        <div className = 'row'>
            Equity Value: { Number(((myDCF + terminalDCF) / (shares/1000000)).toFixed(2)).toLocaleString()}
        </div>
        </>

    )
}
export default Valuation