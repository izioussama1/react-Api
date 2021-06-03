import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Apps from './component/App';
import Bodyf from './component/body';
import Body1 from './component/body1';
import Header from './component/header';
import List from './component/list';


function App() {
  return (
    <Router>
      <Route path='/' exact>
        <section className="section1">
          <div className="App">
            <Header />
          </div>

          <div className="App">
            <Bodyf />
          </div>
        </section>

        <section className="section2">
          <div className="App">
            <Body1 />
          </div>
        </section>
        <div className="App edit" id="exp">
          <Apps />
        </div>
      </Route>
      <Route path='/list'>
        <List></List>
      </Route>
    </Router>
  );
}
export default App;
