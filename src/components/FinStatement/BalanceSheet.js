import React from 'react'
import HistoricalData from './HistoricalData'
import FiveYear from './FiveYear'
import {useStockContext} from '../../context'


function BalanceSheet () {

    const {fullData} = useStockContext()



    return(
        
        

        
        
        <table>
            <thead>
            <tr>
                <th
                    // colSpan = {fullData.incomeStatement.financials ? 4 : 1}

                    // conditionally setting the length of col span - however I think we want to cap this at like 3
                >
                    
                    {fullData && fullData.symbol ? fullData.symbol: '' } DCF (in $Ms)</th>
            </tr>
            
            </thead>

            <tbody>
                <HistoricalData />
                {/* Here we will want a second loop going through the new data */}
                <FiveYear />
            
            </tbody>
        </table>


// {/* So this is never going to work - biggest issue is how to add up data - seems better to make a year a component and somehow we need to iterate or combine all of my info - perhaps when we set state we combine years and have 1 master record?? So I know have a fullData object*/}
            


        
    )

}

export default BalanceSheet