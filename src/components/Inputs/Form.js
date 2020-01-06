import React from 'react'
import {useStockContext} from '../../context'
import BalanceSheet from '../FinStatement/BalanceSheet'

function Form () {

    const {searchStock, setSearchStock, setFullData, setGrowth, setShares, setEbitdaAdj, setDepAmmAdj, setNwcAdj, setCapExAdj} = useStockContext()
   


    const handleSubmit = (e) => {
        e.preventDefault()
                
        console.log(searchStock)
        // search.setSearchStock('')
        Promise.all([
            fetch(`https://financialmodelingprep.com/api/v3/financials/income-statement/${searchStock}`),
            fetch(`https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/${searchStock}`),
            fetch(`https://financialmodelingprep.com/api/v3/financial-ratios/${searchStock}`),
            fetch(`https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/${searchStock}`),
            fetch(`https://financialmodelingprep.com/api/v3/financial-statement-growth/${searchStock}`),
            fetch(`https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/${searchStock}`),
            fetch(`https://financialmodelingprep.com/api/v3/company/historical-discounted-cash-flow/${searchStock}`),
            fetch(`https://financialmodelingprep.com/api/v3/company/profile/${searchStock}`)

        ]).then(([res1, res2, res3, res4, res5, res6, res7, res8]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json(), res8.json()]) ).then(([data1, data2, data3, data4,res5, res6, res7, res8]) => {
            // setIncomeStatement(data1);
            // setBalanceSheet(data2);
            // setRatios(data3);
            // setCashFlow(data4)

        //    this currently doesn't do anything but its retreiving the past 5 year DCF that is calculated and pushing them to an object

            // let calculatedDCF = [...res7.historicalDCF]

            // calculatedDCF.push(res6)

            // let dcfObject = {}
            
            // for (let i = 0; i < calculatedDCF.length; i++) {
            //     const date = new Date(calculatedDCF[i].date).getFullYear()

            //     dcfObject[date] = calculatedDCF[i].DCF

            // }


            // console.log(dcfObject)

            // commented out for now - this is causing an error for new companies

            // end DCF object - currently not being set anywhere but I want to have it


             // calculates NWC for us
             let nwcArray = []

            data2.financials.map((year, key) => {
                // we do get an error here - it wants us to be returning something - 
                if(key < data2.financials.length - 1) {
                    const yearOneNWC = year["Total current assets"] - year["Total current liabilities"]

                    const yearTwoNWC = data2.financials[key+1]["Total current assets"] - data2.financials[key+1]["Total current liabilities"]
                    
                    nwcArray.push(yearOneNWC - yearTwoNWC)

                }
            })

            let nwcRateArray = []
            
            for (let i = 1; i<= 5; i++) {
                if(isNaN((nwcArray[i-1] - nwcArray[i]) / nwcArray[i])) {
                    nwcRateArray.push(0)
                } else {
                    nwcRateArray.push((nwcArray[i-1] - nwcArray[i]) / nwcArray[i])

                }
                

            }



            // should be beaking this up. but we can set baseline rates here

            // this stuff will cause the site to crash on newer companies - so probably need to think about some useful logic there
            let ebitdaGrowth = 0
            let averageTax = 0
            let depAmmGrowth = 0
            let capExGrowth = 0
            let nwcGrowthRate = 0

            if(data1.financials[3]) {

                ebitdaGrowth = Math.pow(((Number(data1.financials[0].EBITDA) / Number(data1.financials[3].EBITDA))  ), (1/3))   - 1

                averageTax = (Number(data3.ratios[0].profitabilityIndicatorRatios.effectiveTaxRate) + Number(data3.ratios[1].profitabilityIndicatorRatios.effectiveTaxRate) + Number(data3.ratios[2].profitabilityIndicatorRatios.effectiveTaxRate) ) / 3

                depAmmGrowth = Math.pow(((data4.financials[0]["Depreciation & Amortization"] / data4.financials[3]["Depreciation & Amortization"])), (1/3)) - 1 
                
                capExGrowth = Math.pow(((data4.financials[0]["Capital Expenditure"] / data4.financials[3]["Capital Expenditure"])), (1/3)) - 1 
                
                nwcGrowthRate = nwcRateArray.reduce((a, b) => a + b, 0)
                
                console.log(nwcArray)
                console.log(ebitdaGrowth.toFixed(3), averageTax.toFixed(3), depAmmGrowth.toFixed(3), capExGrowth.toFixed(3), nwcGrowthRate) 
            }





            // let startingNWC = data2.financials[3]["Total current assets"] - data2.financials[3]["Total current liabilities"]



            setGrowth({
                ebitdaGrowth: ebitdaGrowth.toFixed(3),
                depAmmGrowth: depAmmGrowth.toFixed(3),
                nwcGrowth: nwcGrowthRate.toFixed(3),
                capExGrowth: capExGrowth.toFixed(3),
                tax: averageTax.toFixed(3)
              })


            setFullData({
                symbol: data1.symbol,
                incomeStatement: data1.financials.slice(0,3).reverse(), balanceSheet: data2.financials.slice(0,3).reverse(),
                ratios: data3.ratios.slice(0,3).reverse(),
                cashFlow: data4.financials.slice(0,3).reverse(),
                nwc: nwcArray.slice(0,3).reverse()
             })

             if (res8.profile) {
            setShares(res8.profile.mktCap / res8.profile.price)
             }

            setEbitdaAdj(0)
            setDepAmmAdj(0)
            setNwcAdj(0) 
            setCapExAdj(0)

            // simply resetting the manual adjustments - when we search for a new stock

            // it might actually make sense to combine the data here and set one state for what I want
        
            
        })
        


        

      }

    return(
        <>
        <form onSubmit = {handleSubmit}>
            <label>Enter Symbol: 
                <input 
                    type="text" 
                    value = {searchStock}
                    onChange = {e => setSearchStock(e.target.value)}
                />
            </label>

            <label>
                <input type='submit' value='submit' />
            </label>
        </form>

        <BalanceSheet />
        </>
    )
}

export default Form