import React, {useState, useEffect} from 'react';
import InputContainer from './components/Inputs/InputContainer'
import {useStockContext, StockContext} from './context'

import './App.css';

function App() {

  const [myTest, setMyTest] = useState(0)
  const [searchStock, setSearchStock ] = useState( '' )
  const [myStock, setMyStock] = useState('AAPL')



  
  return (

    <StockContext.Provider value ={{myTest, setMyTest, searchStock ,setSearchStock, myStock, setMyStock}}>
      <div className="container">
        <p>My State =  {myTest}</p>
        

        <InputContainer />

      </div>
    </StockContext.Provider>
  );
}

export default App;
