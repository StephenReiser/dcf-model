import React, {useEffect} from 'react'
import {useStockContext} from '../../context'
import ValuationComponent from './ValuationComponent'

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
        
    },[fiveYearProjection])

    return (
        <div className = 'valuationContainer'>
        
        <ValuationComponent 
            description = {`My DCF: `}
            myValue = {Number(myDCF.toFixed(0)).toLocaleString()}
        />
        <ValuationComponent 
            description = {`Terminal DCF: `}
            myValue = {Number(terminalDCF.toFixed(0)).toLocaleString()}
        />
        <ValuationComponent 
            description = {`Total Value: `}
            myValue = {Number((myDCF + terminalDCF).toFixed(0)).toLocaleString()}
        />
        <ValuationComponent 
            description = {`Total Value: `}
            myValue = {Number((myDCF + terminalDCF).toFixed(0)).toLocaleString()}
        />
        <ValuationComponent 
        // diluted shares outstanding
            description = {`Shares Out: `}
            myValue = {shares ? Number(myShares.toFixed(0)).toLocaleString() : 0}
        />
        <ValuationComponent 
            description = {`Net Debt: `}
            myValue = {Number((netDebt/1000000).toFixed(0)).toLocaleString()}
        />

        <ValuationComponent 
            myStyle = {`summaryLine`}
            description = {`Equity Value: `}
            myValue = {Number(((myDCF + terminalDCF - netDebt/1000000) / (myShares)).toFixed(2)).toLocaleString()}
        />
        <ValuationComponent 
            description = {`Current Price: `}
            myValue = {Number(stockPrice).toFixed(2).toLocaleString()}
        />
       
        </div>

    )
}
export default Valuation