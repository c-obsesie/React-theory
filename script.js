/* React :
-virtual DOM 
-reusable web components 

Syntax:
ReactDOM.render(What do I want to render(e.g. component), Where do I want to render(e.g. root))

import React form 'react'
import ReactDOM from 'react-dom'

From JSX to JS
<h1> Hello {JS}</h1>
or
<h1> Hello {`${JS}`}</h1>

Insert style in React

v1. <h1 style={{color:"#ffff"}}>Hello World</h1>
v2. const styles ={background:black}
<h1 style={stlye}>Hello </h1>
*/ 

// PROPS- give acces to atributes that u pass inside components  - managed from inside

//when render
<Person name="max">  children property </Person>
 // person compoenet 
  const person=(props)=>{return <p> im {props.name}</p>
                        <p> ${childrne property }</p>}
 // State- when u want to keep data inside a component and change it form there - managed from outside can't be changed
    
    class App extends Component{
      state={....}
      render(){
      return <Person name={this.state.person[0].name  />}
                         
  //Event handlers 
        switchNameHandler=()=>{console.log('sal'}
        <button onClick={this.switchNameHandler}></button>

  // How to change state
  this.setState({persons:oher value})
                               
 // useState() -- most important react hook -- 
  // use state has always two elements, first element is the current state, second element is the function that changes the state 
useState({...})
