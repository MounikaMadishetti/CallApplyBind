let name = {
    firstname: "mounika",
    lastname: "madishetti",
    printFullName: function() {
        console.log(this.firstname + "" + this.lastname);
    }
}
name.printFullName();

let name2={
    firstname: "sachin",
    lastname: "tendulkar"
}


//call means function borowwing

name.printFullName.call(name2);


//====other approcaach for call

let printFullName = function(hometown, country) {
    console.log(this.firstname+ "" + this.lastname+ " "+ hometown+" "+country);
}
let name3={
    firstname: "sachin",
    lastname: "tendulkar"
}
printFullName.call(name3, "sldkf", "sdkfj");


//apply
printFullName.apply(name3, ["sdfj", "sldfkje"]);

//bind
let printMyName = printFullName.bind(name3,"sldfkj","lsdkf");
console.log(printMyName);
printMyName();
