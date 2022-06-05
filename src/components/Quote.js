import React, { Component } from 'react';
import "../App.css"

class Quote extends Component {
    constructor(props){
        super(props)
    
         this.state={
            quote: "",
            author:""
         }
          this.getNewQuote=this.getNewQuote.bind(this)
          this.tweetQuote=this.tweetQuote.bind(this)
      }
      
      static getDerivedStateFromProps(props, state) {
        if(props.quotes.length > 0){
          let randomIndex = Math.ceil(Math.random()*props.quotes.length)
          return{quote: props.quotes[randomIndex].quote,author: props.quotes[randomIndex].author};
        }else {
          return {quote: "",author:""}
        }    
      }
    
      getNewQuote(){    
          if(this.props.quotes.length > 0){
            let randomIndex = Math.ceil(Math.random()*this.props.quotes.length)
            let tempObj = this.props.quotes[randomIndex]
            if(tempObj!==undefined){
              this.setState({quote:tempObj.quote,author:tempObj.author})
            }     
          }
      }
    
      tweetQuote(){
        const tempArr = this.state.author.split(" ");
        const hashTag = tempArr.join("");
        const twitterUrl =`https://twitter.com/intent/tweet?text=${this.state.quote}  -${this.state.author}&hashtags=${hashTag},inspirationalquotes`;
        window.open(twitterUrl, '_blank');
    }
    
    
      
      render(){
    
        return  <div className="container">  
                  
                  {this.props.quotes.length > 0 ? <div className = "quote-box" id="quote-box">
                    <h1 className="title">Quote Machine</h1>  
                    <h4 className = "quote" id="text">{this.state.quote}</h4>
                <p id="author"><em>--{this.state.author}</em></p>
              <button onClick={this.tweetQuote} className="tweet-quote"><a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.state.quote}  -${this.state.author}`} target="_blank">Twitter</a></button>
    
              <button id="new-quote" onClick={this.getNewQuote}>New Quote</button>
              </div>
          : <div> loading...</div>}
            </div>
      }
}

export default Quote;