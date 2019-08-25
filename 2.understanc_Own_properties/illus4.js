function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

const duck = new Bird("Donald");

const ownProps = [];
for (let property in duck) {
  if (duck.hasOwnProperty(property)) ownProps.push(property);
}
console.log(ownProps);
