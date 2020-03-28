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
    
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.setState(prev => ({
      items: prev.items.concat(this.state.text)
      
  }));


    console.log("Items array:"+this.state.items);
    console.log(this.items);
  }

  handleChange = (e)=>{

    this.setState({text:e.target.value});
    console.log(this.state.text);

  }

  handleDelete = (index)=>{
    

    //console.log("delete clicked");
    //console.log(this.state.items);
    console.log(index);

    this.setState(prev => ({
      items: prev.items.splice(index,1)
      
  }));

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
        return <li key={index}>{(index+1)+"."}{item}<Button _handleDelete={this.handleDelete.bind(this,index)}>x</Button></li>
          
        })
      }

      </ul>
    </div>
    );

  }
  }
  

export default App;
