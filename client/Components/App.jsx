import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

class App extends Component {
  render(){
    var activeClass = this.props.route;
    console.log(activeClass);
    return (
      <div className="container">
      <br/>
      <ul className='nav nav-pills'>
        <li className={activeClass=='home' ? 'active': ''}><a href="/">Home</a></li>
        <li className={activeClass=='about' ? 'active': ''}><a href="/about">About</a></li>
        <li className={activeClass=='contact' ? 'active': ''}><a href="/contact">Contact</a></li>
      </ul>
      <div>
        {this.props.content}
      </div>
    </div>
  );
  }
}

export default createContainer(() => {
  return {
    route :  FlowRouter.getRouteName()
  }
},App)
