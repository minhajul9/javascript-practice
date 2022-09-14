function saySomething(){
    console.log("Hello world");
}


function doubleIt(num){
    var results = num*2;
    console.log(num, results);
    return results;
}

k=1;
for (var i=1; i<11; i++)
{
    k=doubleIt(k);
}