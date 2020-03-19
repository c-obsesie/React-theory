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
class Owl extends React.Component {
  render() {
    return( <div>
        <h1>{owl.title}</h1>
        <img src ={owl.src} alt={owl.title} />
      </div>)
  }}
ReactDOM.render(<Owl/>, document.getElementById('app'))
  
