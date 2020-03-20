//Variable Attributes in JSX

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

var gooseImg=<img src={goose} />
ReactDOM.render(gooseImg,document.getElementById('app').)

// If Else in JSX
//Ex1
if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);
//Ex2

let img;

// if/else statement begins here:
if (coinToss() === 'heads')
{
  img = <img src={pics.kitty} />
}
else{
  img = <img src={pics.doggy} />
}
ReactDOM.render(img,document.getElementById('app'))
  
  // Write React code without JSX 
  
 // The following JSX expression:

const h1 = <h1>Hello world</h1>;
  
//can be rewritten without JSX, like this:

const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);
  
  /*A component class is like a factory that creates components. If you have a component class, then you can use that class to produce as many components as you want.

To make a component class, you use a base class from the React library: React.Component.

What is React.Component, and how do you use it to make a component class?

React.Component is a JavaScript class. To create your own component class, you must subclass React.Component. 
You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}.*/
  
  ///syntax
class Random extends React.Component {
  render() {
    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random() * 10 + 1);
    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}
  // 'this' component 
  class MyName extends React.Component {
	// name property goes here:
  get name(){
    return 'cosmin'
  }


  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));
  
  //Event listeners in components 
  class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}
// Render props 
	class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Groberta' />, 
  document.getElementById('app')
);
  
