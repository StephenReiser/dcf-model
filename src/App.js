import React, {useState, useEffect} from 'react';
import InputContainer from './components/Inputs/InputContainer'
import {useStockContext, StockContext} from './context'
import GrowthInputs from './components/Inputs/GrowthInputs'
import Valuation from './components/FinStatement/Valuation'



function App() {

  
  const [searchStock, setSearchStock ] = useState( '' )
  const [myStock, setMyStock] = useState('AAPL')
  const [incomeStatement, setIncomeStatement] = useState({})
  const [balanceSheet, setBalanceSheet] = useState({})
  const [ratios, setRatios] = useState({})
  const [cashFlow, setCashFlow] = useState({})
  const [fullData, setFullData] = useState(null)
  const [fiveYearProjection, setFiveYearProjection] = useState(null)
  const [growth, setGrowth] = useState({
    ebitdaGrowth: .05,
    depAmmGrowth: .05,
    nwcGrowth: -.10,
    capExGrowth: .045,
    tax: .24
  })
  const [ebitda, setEbitda ] = useState(growth.ebitdaGrowth)
  const [depAmm, setDepAmm ] = useState(growth.depAmmGrowth)
  const [capEx, setCapEx ] = useState(growth.nwcGrowth)
  const [nwc, setNwc ] = useState(growth.capExGrowth)
  const [tax, setTax ] = useState(growth.tax)
  const [eMultiplier, setEMultiplier ] = useState(10)
  const [discRate, setDiscRate ] = useState(.03)
  const [shares, setShares ] = useState(null)
  const [ebitdaAdj, setEbitdaAdj] = useState(0)
  const [depAmmAdj, setDepAmmAdj] = useState(0)
  const [nwcAdj, setNwcAdj] = useState(0)
  const [capExAdj, setCapExAdj] = useState(0)
  

  // setting this to null will allow us to not have the undefined issue on render - so we can conditionally render data



  
  return (

    <StockContext.Provider value ={{searchStock ,setSearchStock, myStock, setMyStock, incomeStatement, setIncomeStatement, balanceSheet, setBalanceSheet, ratios, setRatios, cashFlow, setCashFlow, fullData, setFullData,fiveYearProjection, setFiveYearProjection, growth, setGrowth, ebitda, setEbitda, depAmm, setDepAmm, capEx, setCapEx, nwc, setNwc, tax, setTax, eMultiplier, setEMultiplier, discRate, setDiscRate, shares, setShares, ebitdaAdj, setEbitdaAdj, depAmmAdj, setDepAmmAdj, nwcAdj, setNwcAdj, capExAdj, setCapExAdj}}>
      <div className="container">
        
        
        <GrowthInputs />
        <InputContainer />
        <Valuation />

      </div>
    </StockContext.Provider>
  );
}

export default App;
