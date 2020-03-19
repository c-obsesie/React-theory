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
  
