function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");

const ownProps = [];
for (let property in duck) {
  if (duck.hasOwnProperty(property)) ownProps.push(property);
}
console.log(ownProps);

// new Knowledge: Object.prototype.hasOwnProperty()
// return a boolean indicating whether the object has that property
