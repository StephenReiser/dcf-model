import {createContext, useContext} from 'react'
import React, {useState, setState} from 'react'


// const {myTest, setMyTest} = useState(0)
export const StockContext = createContext({
    myTest: 0,
    setMyTest: () => {},
    searchStock: 0,
    setSearchStock: () => {},
    myStock: 'AAPL',
    setMyStock: () => {}
    
})


export function useStockContext() {
    const {myTest, setMyTest, searchStock, setSearchStock, myStock, setMyStock} = useContext(StockContext)
    return {myTest, setMyTest, searchStock, setSearchStock, myStock, setMyStock}
}