var inch = 285;
console.log("Inch", inch);

var feet = inch/12;
feet = parseInt(feet);
inch = inch % 12;
console.log(feet, "Feet,", inch, "Inch");