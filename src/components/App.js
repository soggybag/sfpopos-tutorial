import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import './App.css'

import Title from './Title/Title'
import About from './About/About'
import POPOSDetails from './POPOSDetails/POPOSDetails'
import POPOSList from './POPOSList/POPOSList'

function App() {
  return (
    <Router>
      
      <div className="App">
        <Title />

        <Route exact path="/" component={POPOSList}/>
        <Route path="/about" component={About} />
        <Route path="/details/:id" component={POPOSDetails} />
      </div>

    </Router>
  );
}

export default App;

const p = [[1,2], [1,3], [2,5], [4, 5]]

function distance(p1, p2) {
  const dx = p1[0] - p2[0]
  const dy = p1[1] - p2[1]

  return Math.sqrt(dx * dx + dy * dy)
}

const d = []
for (let i = 0; i < p.length; i += 1) {
  for (let j = i; j < p.length; j += 1) {
    if (i !== j) {
      // console.log(i, j)
      // console.log(p[i], p[j])
      const l = { id: `p${i}${j}`, dist: distance(p[i], p[j]) }
      d.push(l)
      console.log(l)
    }
  }
}



d.sort((a, b) => {
  return a.dist - b.dist
})

console.log(d)




