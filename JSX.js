//Variable Attributes in JSX

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

var gooseImg=<img src={goose} />
ReactDOM.render(gooseImg,document.getElementById('app').)

// If Else in JSX

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
