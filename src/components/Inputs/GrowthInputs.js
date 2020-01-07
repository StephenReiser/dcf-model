import React, {useState, useEffect} from 'react';
import {useStockContext} from '../../context'
import GrowthInputChild from './GrowthInputChild'
import '../../css/firstTable.css'


function GrowthInputs () {

    const { ebitda, setEbitda, depAmm, setDepAmm, capEx, setCapEx, nwc, setNwc, setGrowth, fullData, tax, setTax, growth, eMultiplier, setEMultiplier, ebitdaAdj, setEbitdaAdj, depAmmAdj, setDepAmmAdj, nwcAdj, setNwcAdj, capExAdj, setCapExAdj, discRate, setDiscRate, entValue } = useStockContext()

    const setNewGrowths = (e) => {
        e.preventDefault()

      // just plopped this here so nothing breaks on clicking submit/hitting enter
        
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
            <div className = 'col-5'>Name</div>
            <div className = 'col-2'>3yr Avg</div>
            <div className = 'col-1'>Manual Adj</div>
            <div className = 'col-1'>Custom</div>
            <div className = 'col-3'></div>

        </div>
        <GrowthInputChild name = {'EBITDA'} value = {growth.ebitdaGrowth} adj = {ebitdaAdj} adjFunc = {(e) => setEbitdaAdj(e)} input = {ebitda} inputFunc = {(e) =>setEbitda(e)}/>
        <GrowthInputChild name = {'D&A'} value = {growth.depAmmGrowth} adj = {depAmmAdj} adjFunc = {(e) => setDepAmmAdj(e)} input = {depAmm} inputFunc = {(e) =>setDepAmm(e)}/>
        <GrowthInputChild name = {'CapEx'} value = {growth.capExGrowth} adj = {capExAdj} adjFunc = {(e) => setCapExAdj(e)} input = {capEx} inputFunc = {(e) =>setCapEx(e)}/>
        <GrowthInputChild name = {'NWC'} value = {growth.nwcGrowth} adj = {nwcAdj} adjFunc = {(e) => setNwcAdj(e)} input = {nwc} inputFunc = {(e) =>setNwc(e)}/>
        
        <div className = 'row'>
          <div className = 'col-5'>Tax</div>
          <div className = 'col-2'>{growth.tax}</div>
          <div className = 'col-1'></div>
          <div className = 'col-1'>
          <input 
                type="number" 
                value = {tax}
                onChange = {e => setTax(e.target.value)}
            />
            </div>
          <div className = 'col-3'></div>
        </div>
        <div className = 'row'>
          <div className = 'col-5'>Terminal Earnings Multiplier</div>
          <div className = 'col-2'>{entValue}</div>
          <div className = 'col-1'></div>
          <div className = 'col-1'>
          <input 
                type="number" 
                value = {eMultiplier}
                onChange = {e => setEMultiplier(e.target.value)}
            />
            </div>
          <div className = 'col-3'></div>
        </div>
        <div className = 'row'>
          <div className = 'col-5'>Discount Rate</div>
          <div className = 'col-2'>{discRate}</div>
          <div className = 'col-1'></div>
          <div className = 'col-1'>
          <input 
                type="number" 
                value = {discRate}
                onChange = {e => setDiscRate(e.target.value)}
            />
            </div>
          <div className = 'col-3'></div>
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



// pretty sure the components above work

{/* <div className = 'row'>
          <div className = 'col-5'>EBITDA</div>
          <div className = 'col-2'>{growth.ebitdaGrowth}</div>
          <div className = 'col-1'>
          <input 
                type="number" 
                value = {ebitdaAdj}
                onChange = {e => setEbitdaAdj(e.target.value)}
            />
            </div>
          <div className = 'col-1'>
          <input 
                type="number" 
                value = {ebitda}
                onChange = {e => setEbitda(e.target.value)}
            />
            </div>
          <div className = 'col-3'></div>
        </div> */}
        {/* <div className = 'row'>
          <div className = 'col-5'>D&A</div>
          <div className = 'col-2'>{growth.depAmmGrowth}</div>
          <div className = 'col-1'>
          <input 
                type="number" 
                value = {depAmmAdj}
                onChange = {e => setDepAmmAdj(e.target.value)}
            />
            </div>
          <div className = 'col-1'>
          <input 
                type="number" 
                value = {depAmm}
                onChange = {e => setDepAmm(e.target.value)}
            />
            </div>
          <div className = 'col-3'></div>
        </div> */}
        {/* <div className = 'row'>
          <div className = 'col-5'>CapEx</div>
          <div className = 'col-2'>{growth.capExGrowth}</div>
          <div className='col-1'>
          <input 
                type="number" 
                value = {capExAdj}
                onChange = {e => setCapExAdj(e.target.value)}
            />
            </div>
          <div className='col-1'>
          <input 
                type="number" 
                value = {capEx}
                onChange = {e => setCapEx(e.target.value)}
            />
            </div>
          <div className = 'col-3'></div>
        </div> */}
        {/* <div className = 'row'>
          <div className = 'col-5'>NWC</div>
          <div className = 'col-2'>{growth.nwcGrowth}</div>
          <div className='col-1'>
          <input 
                type="number" 
                value = {nwcAdj}
                onChange = {e => setNwcAdj(e.target.value)}
            />
            </div>
          <div className='col-1'>
          <input 
                type="number" 
                value = {nwc}
                onChange = {e => setNwc(e.target.value)}
            />
            </div>
          <div className = 'col-3'></div>
        </div> */}