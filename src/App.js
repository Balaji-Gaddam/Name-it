import React from 'react'
import Header from './header/header';
import ResultContainer from './ResultContainer/ResultContainer'
import './App.css';
import SearchBox from './searchbox/searchBox';
import NameCard from './nameCard/nameCard';


 const  name = require('@rstacruz/startup-name-generator');

class App extends React.Component{
    constructor(){
        super();

        this.state ={
          headerText:"NAME IT...!",
          headerExpanded: true,
          suggestedNames : [],


  }

  handleInputChange = (inputText) =>{
    this.setState({
      headerExpanded:!inputText ,
      suggestedNames : inputText ? name(inputText) : [],
    })
  };

  render(){
    return (
      <div>
        <Header headerExpanded={this.state.headerExpanded}      headTitle={this.state.headerText} />
        <SearchBox  onInputChange = {this.handleInputChange}   />
        < ResultContainer suggestedNames={this.state.suggestedNames} />
      </div>
    )
  }
}

  


export default App