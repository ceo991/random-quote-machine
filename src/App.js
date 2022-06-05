import React, { Component } from 'react';
import axios from 'axios';
import Quote from './components/Quote';
import "./App.css"
class App extends Component{
  
  constructor(props){
    super(props)
     this.state = {
         quotes:[]
     }
  }


  componentDidMount() {
    axios.get(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
      .then(res => {
        const quotes = res.data;
        this.setState({ quotes: (quotes !== undefined)? quotes.quotes : []});
      })
  }
  render(){
    return <div>          
             <Quote quotes={this.state.quotes}/>
          </div>
  }
  
  
}
export default App