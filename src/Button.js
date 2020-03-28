import React from 'react';




class Button extends React.Component {

  constructor(props){
    super(props)
    this.props = props;

    console.log(this.props);

  }


render(){
    return <button onClick={this.props._handleDelete}>x</button>
}


}

export default Button;