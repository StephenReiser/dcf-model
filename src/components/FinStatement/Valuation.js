import React, {useEffect} from 'react'
import {useStockContext} from '../../context'


function Valuation () {

    const {fiveYearProjection, discRate, eMultiplier, shares, stockPrice, netDebt, fullData} = useStockContext()

    
    const myDCF = (fiveYearProjection && (fiveYearProjection.map(year => year.UFCF).reduce((a, b, i) => a + (b / Math.pow((1 + discRate/100), i+1)), 0)) || 0)
    
    
    const terminalDCF = (fiveYearProjection && (fiveYearProjection[fiveYearProjection.length-1].ebitda / Math.pow((1 + discRate/100),fiveYearProjection.length) * eMultiplier) || 0)

    const myShares = (fullData && Number((shares/1000000 / (fullData.incomeStatement[fullData.incomeStatement.length - 1]["EPS Diluted"] / fullData.incomeStatement[fullData.incomeStatement.length - 1]["EPS"]))) || 0)
    
    useEffect(() => {
        // if (fiveYearProjection) {
        //     // myDCF = fiveYearProjection.reduce((a, b) => a + Number(b['UFCF']), 0) 
        //     myDCF = (fiveYearProjection[0].UFCF)  
        console.log('valuation ran')
        // }
        
    },[fiveYearProjection, fullData])

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
        {/* <div className = 'row'>
            Shares Outstanding: {shares ? Number((shares/1000000 ).toFixed(0)).toLocaleString() : 0}
        </div> */}
        <div className = 'row'>
            Diluted Shares Outstanding: {shares ? Number(myShares.toFixed(0)).toLocaleString() : 0}
        </div>
        <div className = 'row'>
            Equity Value: { Number(((myDCF + terminalDCF - netDebt/1000000) / (myShares)).toFixed(2)).toLocaleString()}
        </div>
        <div className = 'row'>
            Current Stock Price: {stockPrice}
        </div>
        </>

    )
}
export default Valuation