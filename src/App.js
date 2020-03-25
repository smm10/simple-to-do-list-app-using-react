import React from 'react';

import Button from './Button';

import './App.css';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      text:"",
      items:[]
    }
    this.items = []
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.items.push(this.state.text);
    this.setState({items:this.items});



    console.log("Items array:"+this.state.items);
    console.log(this.items);
  }

  handleChange = (e)=>{

    this.setState({text:e.target.value});
    console.log(this.state.text);

  }

  handleDelete = ()=>{

  }

 


  render(){
    return(
      <div className="main">
      <h3>Enter your to-do-items here:</h3><input type="text" onChange={this.handleChange}></input>
      <button onClick={this.handleSubmit}>Submit</button>
      <br/>
      <h3>Items:</h3>
      <ul>
      {
        this.state.items.map((item,index)=>{
          return <li key={index}>{item}<Button index={index} items={this.state.items}></Button></li>
          
        })
      }

      </ul>
    </div>
    );

  }
  }
  

export default App;
