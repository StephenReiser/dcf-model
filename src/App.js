import React, {useState} from 'react';

import {StockContext} from './context'


import TabHome from './components/Tabs/TabHome'
import GrowthInputs from './components/Inputs/GrowthInputs'
import Valuation from './components/FinStatement/Valuation'
import NavBar from './components/Nav'



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
    threeYear: {
      ebitdaGrowth: .05,
      depAmmGrowth: .05,
      nwcGrowth: -.10,
      capExGrowth: .045,
      tax: .24
    },
    fiveYear: {
      ebitdaGrowth: .05,
      depAmmGrowth: .05,
      nwcGrowth: -.10,
      capExGrowth: .045,
      tax: .24
      },
    oneYear: {
      ebitdaGrowth: .05,
      depAmmGrowth: .05,
      nwcGrowth: -.10,
      capExGrowth: .045,
      tax: .24
      },
  })
  const [ebitda, setEbitda ] = useState(growth.ebitdaGrowth)
  const [depAmm, setDepAmm ] = useState(growth.depAmmGrowth)
  const [capEx, setCapEx ] = useState(growth.nwcGrowth)
  const [nwc, setNwc ] = useState(growth.capExGrowth)
  const [tax, setTax ] = useState(growth.tax)
  const [eMultiplier, setEMultiplier ] = useState(10)
  const [discRate, setDiscRate ] = useState(3)
  const [shares, setShares ] = useState(null)
  const [ebitdaAdj, setEbitdaAdj] = useState(0)
  const [depAmmAdj, setDepAmmAdj] = useState(0)
  const [nwcAdj, setNwcAdj] = useState(0)
  const [capExAdj, setCapExAdj] = useState(0)
  const [stockPrice, setStockPrice] = useState(0)
  const [entValue, setEntValue] = useState(0)
  const [netDebt, setNetDebt] = useState(0)
  const [chartData, setChartData] = useState(null)
  const [news, setNews] = useState(null)
  const [favoriteNews, setFavoriteNews] = useState(null)


  const [favoriteArticles, setMyFavoriteArticles] = useState(['https://dagorettinews.com/new-approach-of-internet-of-things-software-market-2019-to-business-applications-with-top-key-players-microsoft-corporation-cisco-systems-inc-sap-se-intel-corporation-general-electronics/','https://www.businessinsider.com/linkedin-ceo-jeff-weiner-open-letter-harassment-2020-1','https://www.businessinsider.com/microsoft-bedlam-card-game-kc-lemson-2020-1'])


  
  

  // setting this to null will allow us to not have the undefined issue on render - so we can conditionally render data


  

  
  return (

    <StockContext.Provider value ={{searchStock ,setSearchStock, myStock, setMyStock, incomeStatement, setIncomeStatement, balanceSheet, setBalanceSheet, ratios, setRatios, cashFlow, setCashFlow, fullData, setFullData,fiveYearProjection, setFiveYearProjection, growth, setGrowth, ebitda, setEbitda, depAmm, setDepAmm, capEx, setCapEx, nwc, setNwc, tax, setTax, eMultiplier, setEMultiplier, discRate, setDiscRate, shares, setShares, ebitdaAdj, setEbitdaAdj, depAmmAdj, setDepAmmAdj, nwcAdj, setNwcAdj, capExAdj, setCapExAdj, stockPrice, setStockPrice, entValue, setEntValue, netDebt, setNetDebt, chartData, setChartData, news, setNews, favoriteArticles, setMyFavoriteArticles, favoriteNews, setFavoriteNews}}>
      
    <NavBar />
    

      <div className="container">
        
      <div className = 'row'>
        <div className = 'col-md-9'>
          <GrowthInputs />
        </div>
        <div className = 'col-md-3 valuationParentBox'>
          <Valuation />
        </div>
      </div>
        
          <TabHome />
        
        
       

      </div>
      
    </StockContext.Provider>
  );
}

export default App;
