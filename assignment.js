function feetToMile(feet){
    let miles = feet / 5280;
    console.log(miles.toFixed(2), "Miles");
    console.log("or");
    miles = parseInt(miles);
    let ft = feet % 5280;
    console.log("Miles:", miles, " Feet:", ft);
}

function woodCalculator(chair, table, bed){
    let woodNeeded = chair*1 + table*3 + bed*5;
    console.log(woodNeeded);
    return woodNeeded;
}

function brickCalculator(floors){
    let heights = 0;
    let bricks10 = 150;
    let bricks20 = 270;
    
    if (floors>20){
        heights = bricks20 + (floors-20)*10;
    }
    else if (floors>10){
        heights = bricks10 + (floors - 10)*12;
    }
    else{
        heights = floors * 15;
    }
    let bricks = heights * 1000;
    console.log(bricks);
    return bricks;
}

function tinyFriend(names)
{
    let nameLength = [];
    for (let i = 0; i<names.length; i++){
        let temp = names[i].length;
        nameLength.push(temp);
    }
    console.log(nameLength);
    let shortPosition = 0;
    let shortest = nameLength[0];
    for (let i = 1; i<names.length; i++){
        if (nameLength[i]<shortest){
            shortest = nameLength[i];
            shortPosition = i;
        }
    }
    console.log("Shortest Name is: ", names[shortPosition]);
}
