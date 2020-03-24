import React from 'react';


import './App.css';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      to_do_list:[]
    }
  }




  render(){
    return(
      <div className="main">
      <h3>Enter your to-do-items here:</h3><input type="text"></input>
      <button onClick>Submit</button>
    </div>
    );

  }
  }
  

export default App;
