function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

const canary = new Bird("Tweety");

const ownProps = [];
for (let prop in canary) {
  if (canary.hasOwnProperty(prop)) ownProps.push(prop);
}
console.log(ownProps);
