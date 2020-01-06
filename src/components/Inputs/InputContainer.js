import React from 'react'

import Form from './Form'

function InputContainer () {
    

    // can also have this like:
    // const {setMyTest, myTest} = useStockContext()


    // const setMyTest = useStockContext()

    // function testingButton(){
    //     myTest.setMyTest(myTest.myTest + 1)
    //   }
    return(
        <div>
            {/* <button onClick = {() => {testingButton()}}>Test Button </button> */}
            {/* <h5>Input COntainer {myTest.myTest }</h5> */}

            <Form />


        </div>
    ) 
}

export default InputContainer