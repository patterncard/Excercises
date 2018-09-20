console.log('Hello K-pop!');

// Factory funtion

function createCircle(radius) {
  return{
      radius:1,
      draw: function() {
      console.log('drawing');
    }
  }
}
const circle = createCircle(1);


// Constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const another = new Circle(1);

const Circle1 = new Function('radius', `
this.radius = radius;
  this.draw = function() {
    console.log('draw')
  }
  `);
const ciricle = new Circle1(1);

Circle.call({}, 1)
Circle.apply({}, [1, 2, 3]);
