import React,{Component} from 'react';
import {mount} from 'react-mounter';
import App from './Components/App.jsx';
import {Home} from './Components/Home.jsx';
import {About} from './Components/About.jsx';
import {Contact} from './Components/Contact.jsx';


FlowRouter.route('/', {
  action(){
    mount(App, {
      content : <Home/>
    })
  },
  name: 'home'
})

FlowRouter.route('/about', {
  action(){
    mount(App, {
      content : <About/>
    })
  },
  name: 'about'
})

FlowRouter.route('/contact', {
  action(){
    mount(App, {
      content : <Contact/>
    })
  },
  name : 'contact'
})
