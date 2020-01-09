import React, {useState} from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import MainTab from './MainTab'
import Charts from './Charts'


function ControlledTabs() {
    const [key, setKey] = useState('main');
  
    return (
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="main" title="Main">
          <MainTab />
        </Tab>
        <Tab eventKey="chart" title="Chart">
          <Charts />
        </Tab>
        {/* <Tab eventKey="contact" title="Contact" disabled>
          <div>
              final div
          </div>
        </Tab> */}
      </Tabs>
    );
  }
  export default ControlledTabs
  