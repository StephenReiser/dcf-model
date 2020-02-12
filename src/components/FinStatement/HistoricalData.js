import React from 'react'

import {useStockContext} from '../../context'
import '../../css/table.css'

function HistoricalData () {

    const {fullData} = useStockContext()





    return(
        

            <>
                    <tr>
                        <th>Year</th>
                        <th>EBITDA</th>
                        <th>EBIT</th>
                        <th>Eff Tax Rate</th>
                        <th>&nbsp;</th>
                        <th>EBI</th>
                        <th>D&A</th>
                        <th>NWC</th>
                        <th>Cap Ex</th>
                        <th>UFCF</th>
                    </tr>

                    
            {fullData && ( fullData.incomeStatement.map((year, key) => {
                
                    const date = new Date(year.date).getFullYear()
                    const ebitda = Number(year.EBITDA)/1000000
                    const ebit = Number(year.EBIT)/1000000
                    const tax = Number(fullData.ratios[key]["profitabilityIndicatorRatios"].effectiveTaxRate)
                    const ebi = ebit * (1-tax)
                    const depAmm = Number(fullData.cashFlow[key]["Depreciation & Amortization"])/1000000
                    const nwc = Number(fullData.nwc[key])/1000000 || 0
                    const capEx = Number(fullData.cashFlow[key]["Capital Expenditure"])/1000000
                    const UFCF = ebi+depAmm+nwc+capEx
                return(
                    
                    
                <tr key = {year.date}>
                    <td className = 'tableDate'>
                        {date}
                    </td>
                    <td>
                        {Math.floor(ebitda).toLocaleString()}
                    </td>
                    <td>
                        {Math.floor(ebit).toLocaleString()}
                    </td>
                    <td>
                        {(tax*100).toFixed(1)}%
                    </td>
                    <td>&nbsp;</td>
                    <td>
                        {Math.floor(ebi).toLocaleString()}
                    </td>
                    <td>
                        {Math.floor(depAmm).toLocaleString()}
                    </td>
                    <td>
                        {Math.floor(nwc).toLocaleString()}
                    </td>
                    <td>
                        {Math.floor(capEx).toLocaleString()}
                    </td>
                    <td>
                        {Math.floor(UFCF).toLocaleString()}
                    </td>
                    
                </tr>

               
               
                )
            })
            )}
             
            </>
    )


        
    

}

export default HistoricalData