import React from 'react'
import {useStockContext} from '../../context'
import BalanceSheet from '../FinStatement/BalanceSheet'

function Form () {

    const {searchStock, setSearchStock, setFullData, setGrowth, setShares, setEbitdaAdj, setDepAmmAdj, setNwcAdj, setCapExAdj, setStockPrice, setEntValue, setEMultiplier, setNetDebt, setChartData, setNews} = useStockContext()
   


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
            fetch(`https://financialmodelingprep.com/api/v3/company/profile/${searchStock}`),
            fetch(`https://financialmodelingprep.com/api/v3/company-key-metrics/${searchStock}`),
            fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${searchStock}?from=2017-01-01&to=2030-01-12`,
            )

        ]).then(([res1, res2, res3, res4, res5, res6, res7, res8, res9, chartData]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json(), res8.json(), res9.json(), chartData.json()]) ).then(([data1, data2, data3, data4,res5, res6, res7, res8, res9,chartData]) => {
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

            // This can be a fetch for news - seems sketchy to put it in here though???
            fetch(`https://newsapi.org/v2/everything?qintitle=(${searchStock}%20OR%20"${res8.profile.companyName}")&language=en&apiKey=b63a600feebd4b7bb43d8db2135791a8`).then(data => data.json()).then(data => setNews(data))
            // end DCF object - currently not being set anywhere but I want to have it
            console.log('fetch complete')
            // console.log(res8.profile.companyName)

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

            console.log(nwcRateArray)

            // should be beaking this up. but we can set baseline rates here

            // this stuff will cause the site to crash on newer companies - so probably need to think about some useful logic there
            let ebitdaGrowth = 0
            let averageTax = 0
            let depAmmGrowth = 0
            let capExGrowth = 0
            let nwcGrowthRate = 0

            if(data1.financials[3]) {

                ebitdaGrowth = ebitdaGrowthFormula(data1, 3)

                averageTax = averageTaxFormula(data3, 3)

                depAmmGrowth = depAmmGrowthFormula(data4, 3)
                
                capExGrowth = capExGrowthFormula(data4, 3)
                
                nwcGrowthRate = nwcRateArray.reduce((a, b) => a + b, 0)
                
                // console.log(nwcArray)
                // console.log(ebitdaGrowth.toFixed(3), averageTax.toFixed(3), depAmmGrowth.toFixed(3), capExGrowth.toFixed(3), nwcGrowthRate) 
            }

            let fiveYearEbitdaGrowth = 0
            let fiveYearAverageTax = 0
            let fiveYearDepAmmGrowth = 0
            let fiveYearCapExGrowth = 0
            

            if(data1.financials[5]) {

                fiveYearEbitdaGrowth = ebitdaGrowthFormula(data1, 5)

                fiveYearAverageTax = averageTaxFormula(data3, 5)

                fiveYearDepAmmGrowth = depAmmGrowthFormula(data4, 5)
                
                fiveYearCapExGrowth = capExGrowthFormula(data4, 5)
                
                
                
                
            }

            let oneYearEbitdaGrowth = 0
            let oneYearAverageTax = 0
            let oneYearDepAmmGrowth = 0
            let oneYearCapExGrowth = 0
            

            if(data1.financials[1]) {

                oneYearEbitdaGrowth = ebitdaGrowthFormula(data1, 1)

                oneYearAverageTax = averageTaxFormula(data3, 1)

                oneYearDepAmmGrowth = depAmmGrowthFormula(data4, 1)
                
                oneYearCapExGrowth = capExGrowthFormula(data4, 1)
                
                
                
                
            }





            // let startingNWC = data2.financials[3]["Total current assets"] - data2.financials[3]["Total current liabilities"]



            setGrowth({
                threeYear: {
                    ebitdaGrowth: ebitdaGrowth.toFixed(3),
                    depAmmGrowth: depAmmGrowth.toFixed(3),
                    nwcGrowth: nwcGrowthRate.toFixed(3),
                    capExGrowth: capExGrowth.toFixed(3),
                    tax: averageTax.toFixed(3)
            }, 
                fiveYear: {
                    ebitdaGrowth: fiveYearEbitdaGrowth.toFixed(3),
                    depAmmGrowth: fiveYearDepAmmGrowth.toFixed(3),
                    nwcGrowth: nwcGrowthRate.toFixed(3),
                    capExGrowth: fiveYearCapExGrowth.toFixed(3),
                    tax: fiveYearAverageTax.toFixed(3)
            },
                oneYear: {
                    ebitdaGrowth: oneYearEbitdaGrowth.toFixed(3),
                    depAmmGrowth: oneYearDepAmmGrowth.toFixed(3),
                    nwcGrowth: nwcGrowthRate.toFixed(3),
                    capExGrowth: oneYearCapExGrowth.toFixed(3),
                    tax: oneYearAverageTax.toFixed(3)
            }
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
            setStockPrice(res8.profile.price)
            setNetDebt(data2.financials[0]["Total debt"] - data2.financials[0]["Cash and cash equivalents"] - data2.financials[0]["Short-term investments"] - data2.financials[0]["Long-term investments"])

            
            setEMultiplier(res9.metrics[0]["Enterprise Value over EBITDA"])
            setEntValue(res9.metrics[0]["Enterprise Value over EBITDA"])
            setChartData(chartData)

            // simply resetting the manual adjustments - when we search for a new stock

            // it might actually make sense to combine the data here and set one state for what I want
        
            
        }).catch(err => console.log(err))
        


        

      }


      const ebitdaGrowthFormula = (dataSet, years) => {
         return Math.pow(((Number(dataSet.financials[0].EBITDA) / Number(dataSet.financials[years].EBITDA))  ), (1/years))   - 1
      }

      const averageTaxFormula = (dataSet, years) => {
          let taxRate = 0
          for (let i = 0; i < years; i++) {
            taxRate = taxRate + Number(dataSet.ratios[i].profitabilityIndicatorRatios.effectiveTaxRate)

          }
          return taxRate/years
        
      }

      const depAmmGrowthFormula = (dataSet, years) => {
        return Math.pow(((dataSet.financials[0]["Depreciation & Amortization"] / dataSet.financials[years]["Depreciation & Amortization"])), (1/years)) - 1 
      }

      const capExGrowthFormula = (dataSet, years) => {
        return Math.pow(((dataSet.financials[0]["Capital Expenditure"] / dataSet.financials[years]["Capital Expenditure"])), (1/years)) - 1 
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