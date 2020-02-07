import React, {useEffect} from 'react';
import {useStockContext} from '../../context'
import GrowthInputChild from './GrowthInputChild'
import CustomInputs from './CustomInputs'
import '../../css/firstTable.css'


function GrowthInputs () {

    const { ebitda, setEbitda, depAmm, setDepAmm, capEx, setCapEx, nwc, setNwc, fullData, tax, setTax, growth, eMultiplier, setEMultiplier, ebitdaAdj, setEbitdaAdj, depAmmAdj, setDepAmmAdj, nwcAdj, setNwcAdj, capExAdj, setCapExAdj, discRate, setDiscRate, entValue } = useStockContext()

    const setNewGrowths = (e) => {
        e.preventDefault()

      // just plopped this here so nothing breaks on clicking submit/hitting enter
        
    }

    useEffect(() => {
        console.log(fullData)
    setEbitda(growth.threeYear.ebitdaGrowth)
    setDepAmm(growth.threeYear.depAmmGrowth)
    setCapEx(growth.threeYear.capExGrowth)
    setNwc(-0.05)

    // NWC seems to rapidly adjust - so just setting a basic default value here - in terminal years is should begin to decreas toward 0 - same with capex fwiw
    
    setTax(growth.threeYear.tax)
    }, [growth])
    // I think what would be good here is when we submit a new stock - this stuff runs resetting defaults or pulling in a baseline number - right now anythign you change stays for the next ones

    // const myBaselineFunction = (inputData) => {
    //     // console.log('hello')
    //     // setGrowth({
    //     //     ebitdaGrowth: .05,
    //     //     depAmmGrowth: .05,
    //     //     nwcGrowth: -.10,
    //     //     capExGrowth: .045,
    //     //     tax: .24
    //     //     }
    //     // )
    // }

    return(
        <form onSubmit = {setNewGrowths}>
        <div className = 'row'>
            <div className = 'col-4'>Name</div>
            <div className = 'col-1'>5yr Avg</div>
            <div className = 'col-1'>3yr Avg</div>
            <div className = 'col-1'>1yr Avg</div>
            <div className = 'col-1'>Manual Adj</div>
            <div className = 'col-1'>Custom</div>
            <div className = 'col-3'></div>

        </div>
        <GrowthInputChild 
          name = {'EBITDA'} 
          fiveYearValue = {growth.fiveYear.ebitdaGrowth} 
          value = {growth.threeYear.ebitdaGrowth} 
          adj = {ebitdaAdj} 
          adjFunc = {setEbitdaAdj} 
          input = {ebitda} 
          oneYear  = {growth.oneYear.ebitdaGrowth} 
          inputFunc = {setEbitda}
          />
        <GrowthInputChild 
          name = {'D&A'} 
          fiveYearValue = {growth.fiveYear.depAmmGrowth} 
          value = {growth.threeYear.depAmmGrowth} 
          adj = {depAmmAdj} 
          adjFunc = {setDepAmmAdj} 
          oneYear  = {growth.oneYear.depAmmGrowth} 
          input = {depAmm} 
          inputFunc = {setDepAmm}
          />
        <GrowthInputChild 
          name = {'CapEx'} 
          fiveYearValue = {growth.fiveYear.capExGrowth} 
          value = {growth.threeYear.capExGrowth} 
          adj = {capExAdj} 
          adjFunc = {setCapExAdj} 
          oneYear  = {growth.oneYear.capExGrowth} 
          input = {capEx} 
          inputFunc = {setCapEx}
          />
        <GrowthInputChild 
          name = {'NWC'} 
          fiveYearValue = {growth.fiveYear.nwcGrowth} 
          value = {growth.threeYear.nwcGrowth} 
          oneYear  = {growth.oneYear.nwcGrowth} 
          adj = {nwcAdj} 
          adjFunc = {setNwcAdj} 
          input = {nwc} 
          inputFunc = {setNwc}
          />
        <CustomInputs 
          description = {'Tax'}
          fiveYear = {growth.fiveYear.tax}
          threeYear = {growth.threeYear.tax}
          oneYear = {growth.oneYear.tax}
          inputType = {"number"}
          inputValue = {tax}
          inputFunc = {setTax}
          />
        <CustomInputs 
          description = {'Terminal Earnings Multiplier'}
          fiveYear = {entValue}
          threeYear = {''}
          oneYear = {''}
          inputType = {"number"}
          inputValue = {eMultiplier}
          inputFunc = {setEMultiplier}
          />
        <CustomInputs 
          description = {'Discount Rate'}
          fiveYear = {discRate}
          threeYear = {''}
          oneYear = {''}
          inputType = {"number"}
          inputValue = {discRate}
          inputFunc = {setDiscRate}
          />
          
        {/* <label>
             <input type='submit' value='submit' />
        </label> */}
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


