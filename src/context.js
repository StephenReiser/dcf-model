import {createContext, useContext} from 'react'



// const {myTest, setMyTest} = useState(0)
export const StockContext = createContext({
    
    searchStock: 0,
    setSearchStock: () => {},
    myStock: 'AAPL',
    setMyStock: () => {},
    incomeStatement: {},
    setIncomeStatement: () => {},
    balanceSheet: {},
    setBalanceSheet: () => {},
    ratios: {},
    setRatios: () => {},
    cashFlow: {},
    setCashFlow: () => {},
    fullData: {},
    setFullData: () => {},
    fiveYearProjection: {},
    setFiveYearProjection: () => {},
    growth: {},
    setGrowth: () => {},
    ebitda: {},
    setEbitda: () => {},
    depAmm: {},
    setDepAmm: () => {},
    nwc: {},
    setNwc: () => {},
    capEx: {},
    setCapEx: () => {},
    tax: {},
    setTax: () => {},
    eMultiplier: {},
    setEMultiplier: () => {},
    discRate: {},
    setDiscRate: () => {},
    shares: {},
    setShares: () => {}
    
})


export function useStockContext() {
    const {searchStock, setSearchStock, myStock, setMyStock, incomeStatement, setIncomeStatement, balanceSheet, setBalanceSheet, ratios, setRatios, cashFlow, setCashFlow, fullData, setFullData,fiveYearProjection, setFiveYearProjection, growth, setGrowth,ebitda, setEbitda, depAmm, setDepAmm, capEx, setCapEx, nwc, setNwc, tax, setTax, eMultiplier, setEMultiplier, discRate, setDiscRate, shares, setShares} = useContext(StockContext)
    return {searchStock, setSearchStock, myStock, setMyStock, incomeStatement, setIncomeStatement, balanceSheet, setBalanceSheet, ratios, setRatios, cashFlow, setCashFlow, fullData, setFullData,fiveYearProjection, setFiveYearProjection, growth, setGrowth,ebitda, setEbitda, depAmm, setDepAmm, capEx, setCapEx, nwc, setNwc, tax, setTax, eMultiplier, setEMultiplier, discRate, setDiscRate, shares, setShares}
}