import React, {useEffect} from 'react'
import {useStockContext} from '../../context'
import '../../css/table.css'





function FiveYear () {

    const {fullData, fiveYearProjection, setFiveYearProjection, growth, ebitda, depAmm, capEx, nwc, tax, ebitdaAdj, depAmmAdj, nwcAdj, capExAdj} = useStockContext()

    function baseLine(fullDataState) {
        let myData = [[{}],[],[],[],[],[]]
        

        if(fullData) {
        const base = fullDataState.incomeStatement[2]
        myData[0].date = new Date(base.date).getFullYear()
        myData[0].ebitda = Number(base.EBITDA)/1000000
        myData[0].ebit = Number(base.EBIT)/1000000
        myData[0].tax = Number(fullData.ratios[2]["profitabilityIndicatorRatios"].effectiveTaxRate)
        myData[0].ebi = myData[0].ebit * (1-myData[0].tax)
        myData[0].depAmm = Number(fullData.cashFlow[2]["Depreciation & Amortization"])/1000000
        myData[0].nwc = Number(fullData.nwc[2])/1000000
        myData[0].capEx = Number(fullData.cashFlow[2]["Capital Expenditure"])/1000000
        myData[0].UFCF = myData[0].ebi+myData[0].depAmm+myData[0].nwc+myData[0].capEx

        createFiveYear(myData)
    }
        // console.log(myData)
        // setFiveYearProjection(myData)
    }

    // so we can take this piece above and extrapolate based on rates - and then just set the state - probably makes the most sense.

    function createFiveYear (baselineData) {
        let fiveYearArray = []

        
        let depAmmGrowth = Number(depAmm)
        let nwcGrowth = Number(nwc)
        let capExGrowth = Number(capEx)


        let startingPoint = {}
        startingPoint.date = baselineData[0].date
        startingPoint.ebitda = baselineData[0].ebitda + Number(ebitdaAdj)
        // calculate ebit here
        startingPoint.tax = growth.tax
        startingPoint.ebi = startingPoint.ebit * startingPoint.tax
        startingPoint.depAmm = baselineData[0].depAmm + Number(depAmmAdj)
        startingPoint.ebit = startingPoint.ebitda - startingPoint.depAmm
        startingPoint.nwc = baselineData[0].nwc + Number(nwcAdj)

        // I HARD CODED -32000 here to adjust APPLE NWC to tie to my test - not relavent once these are set as forms

        // I think i should have a manual adjustment that will impact the starting point

        startingPoint.capEx = baselineData[0].capEx + Number(capExAdj)
        startingPoint.UFCF = startingPoint.ebi + startingPoint.depAmm + startingPoint.nwc + startingPoint.capEx
        

        fiveYearArray.push(startingPoint)
        

        for (let i = 0; i < 5; i++) {
            let startingPoint = {}
            startingPoint.date = fiveYearArray[i].date + 1
            startingPoint.ebitda = fiveYearArray[i].ebitda * (1 + Number(ebitda))
            
            startingPoint.tax = tax
            startingPoint.depAmm = fiveYearArray[i].depAmm * (1 + depAmmGrowth)
            startingPoint.nwc = fiveYearArray[i].nwc * ( 1 + nwcGrowth)
            startingPoint.capEx = fiveYearArray[i].capEx * (1 + capExGrowth)
            startingPoint.ebit = startingPoint.ebitda - startingPoint.depAmm
            startingPoint.ebi = startingPoint.ebit * (1-startingPoint.tax)
            startingPoint.UFCF = startingPoint.ebi + startingPoint.depAmm + startingPoint.nwc + startingPoint.capEx

            fiveYearArray.push(startingPoint)
           
        }
        fiveYearArray.shift()
        setFiveYearProjection(fiveYearArray)
       
        console.log(fiveYearArray)

    }


    useEffect(() => {
        baseLine(fullData)
    }, [fullData, growth, ebitda, depAmm, capEx, nwc, tax, ebitdaAdj, depAmmAdj, nwcAdj, capExAdj])

    // by setting it like this - anytime fullData or growth update, this resets

    return(
        <>
        {fiveYearProjection && (fiveYearProjection.map((year) => {
            return(
                <tr>
                    <td>{year.date}</td>
                    <td>{Math.floor(year.ebitda).toLocaleString()}</td>
                    <td>{Math.floor(year.ebit).toLocaleString()}</td>
                    <td>
                        {(year.tax*100).toFixed(1)}%
                    </td>
                    <td>&nbsp;</td>
                    <td>
                        {Math.floor(year.ebi).toLocaleString()}
                    </td>
                    <td>
                        {Math.floor(year.depAmm).toLocaleString()}
                    </td>
                    <td>
                        {Math.floor(year.nwc).toLocaleString()}
                    </td>
                    <td>
                        {Math.floor(year.capEx).toLocaleString()}
                    </td>
                    <td>
                        {Math.floor(year.UFCF).toLocaleString()}
                    </td>
                </tr>
            )
        }))}
    </>
    )
}

export default FiveYear


// so i think the strategy will be to take the fullData state - and create a state here for the five year plan - giving it a starting point

// this is ultimately a form so stuff will be able to be changed probably should hard code growth rates for EBITDA, D&A, NWC, CapEx as well as a EV/EBITDA multiple (perhaps 70% of the trailing 3 years)