const Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
};

const crow = new Bird("Alexis", "black");
console.log(crow instanceof Bird);

const canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};
console.log(canary instanceof Bird);
