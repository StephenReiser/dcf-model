import React, {useState} from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import MainTab from './MainTab'
import Charts from './Charts'
import News from './News'
import Favorites from './Favorites'
// import Notes from '../Notes/Notes'


function ControlledTabs() {
    const [key, setKey] = useState('main');
  
    return (
      <Tabs id="controlled-tab" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="main" title="Main">
          <MainTab />
        </Tab>
        <Tab eventKey="chart" title="Chart">
          <Charts />
        </Tab>
        <Tab eventKey="news" title="News">
          <News />
        </Tab>
        <Tab eventKey="favorites" title="Favorites">
          <Favorites />
        </Tab>
        {/* <Tab eventKey="notes" title="Notes">
          <Notes />
        </Tab> */}
        {/* <Tab eventKey="contact" title="Contact" disabled>
          <div>
              final div
          </div>
        </Tab> */}
      </Tabs>
    );
  }
  export default ControlledTabs
  