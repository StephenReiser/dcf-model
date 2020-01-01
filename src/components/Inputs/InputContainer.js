import React, {useState} from 'react'
import {useStockContext} from '../../context'
import Form from './Form'

function InputContainer () {
    const myTest = useStockContext()

    // can also have this like:
    // const {setMyTest, myTest} = useStockContext()


    // const setMyTest = useStockContext()

    function testingButton(){
        myTest.setMyTest(myTest.myTest + 1)
      }
    return(
        <div>
            <button onClick = {() => {testingButton()}}>Test Button </button>
            <h5>Input COntainer {myTest.myTest }</h5>

            <Form />


        </div>
    ) 
}

export default InputContainer