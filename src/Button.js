import React from 'react';




class Button extends React.Component {

  constructor(props){
    super(props)
    this.props = props;

    console.log(this.props);

  }

  handleDelete = ()=>{


    this.props.items.splice(this.props.index, 1);
    console.log("delete button clicked");

    console.log(this.props.items);
    


  }

render(){
    return <button onClick={this.handleDelete}>x</button>
}


}

export default Button;