import React, {useState, useEffect} from 'react';
import {useStockContext} from '../../context'
import GrowthInputChild from './GrowthInputChild'
import '../../css/firstTable.css'


function GrowthInputs () {

    const { ebitda, setEbitda, depAmm, setDepAmm, capEx, setCapEx, nwc, setNwc, setGrowth, fullData, tax, setTax, growth } = useStockContext()

    const setNewGrowths = (e) => {
        e.preventDefault()


        // i dont want to reset growth, should just reset the rates while growth stays a constant 9adj for adj)
        // setGrowth({
        //     ebitdaGrowth: ebitda,
        //     depAmmGrowth: depAmm,
        //     nwcGrowth: nwc,
        //     capExGrowth: capEx,
        //     tax: tax
        // })
        
    }

    useEffect(() => {
        console.log(fullData)
    setEbitda(growth.ebitdaGrowth)
    setDepAmm(growth.depAmmGrowth)
    setCapEx(growth.capExGrowth)
    setNwc(growth.nwcGrowth)
    setTax(growth.tax)
    }, [growth])
    // I think what would be good here is when we submit a new stock - this stuff runs resetting defaults or pulling in a baseline number - right now anythign you change stays for the next ones

    const myBaselineFunction = (inputData) => {
        // console.log('hello')
        // setGrowth({
        //     ebitdaGrowth: .05,
        //     depAmmGrowth: .05,
        //     nwcGrowth: -.10,
        //     capExGrowth: .045,
        //     tax: .24
        //     }
        // )
    }

    return(
        <form onSubmit = {setNewGrowths}>
        <div className = 'row'>
            <div className = 'col s3'>Name</div>
            <div className = 'col s2'>3yr Avg</div>
            <div className = 'col s1'>Custom</div>
            <div className = 'col s7'></div>

        </div>
        <div className = 'row'>
          <div className = 'col s3'>EBITDA</div>
          <div className = 'col s2'>{growth.ebitdaGrowth}</div>
          <input 
                type="text" 
                value = {ebitda}
                onChange = {e => setEbitda(e.target.value)}
            />
          <div className = 'col s7'></div>
        </div>
        <div className = 'row'>
          <div className = 'col s3'>D&A</div>
          <div className = 'col s2'>{growth.depAmmGrowth}</div>
          <input 
                type="text" 
                value = {depAmm}
                onChange = {e => setDepAmm(e.target.value)}
            />
          <div className = 'col s7'></div>
        </div>
        <div className = 'row'>
          <div className = 'col s3'>CapEx</div>
          <div className = 'col s2'>{growth.capExGrowth}</div>
          <input 
                type="text" 
                value = {capEx}
                onChange = {e => setCapEx(e.target.value)}
            />
          <div className = 'col s7'></div>
        </div>
        <div className = 'row'>
          <div className = 'col s3'>NWC</div>
          <div className = 'col s2'>{growth.nwcGrowth}</div>
          <input 
                type="text" 
                value = {nwc}
                onChange = {e => setNwc(e.target.value)}
            />
          <div className = 'col s7'></div>
        </div>
        <div className = 'row'>
          <div className = 'col s3'>Tax</div>
          <div className = 'col s2'>{growth.tax}</div>
          <input 
                type="text" 
                value = {tax}
                onChange = {e => setTax(e.target.value)}
            />
          <div className = 'col s7'></div>
        </div>
        <label>
             <input type='submit' value='submit' />
        </label>
      </form>
    //     <form onSubmit = {setNewGrowths}>
    //     <GrowthInputChild name={'EBITDA'} value = {ebitda} setFunc = {setEbitda}/>
    //     <GrowthInputChild name={'D&A'} value = {depAmm} setFunc = {setDepAmm}/>
    //     <GrowthInputChild name={'CapEx'} value = {capEx} setFunc = {setCapEx}/>
    //     <GrowthInputChild name={'NWC'} value = {nwc} setFunc = {setNwc}/>
    //     <GrowthInputChild name={'TaxRate'} value = {tax} setFunc = {setTax}/>

    //     <label>
    //         <input type='submit' value='submit' />
    //     </label>
    // </form>
    )
}

export default GrowthInputs 

// so how do i do this - is it worth setting random defaults - should I be calculating a baseline based on past experience - ie average 5 year growth rate? I like the idea of having average growth rates to start as a baseline - so filling in these fields isn't as subjective


// Some where we ened to reset the growth form