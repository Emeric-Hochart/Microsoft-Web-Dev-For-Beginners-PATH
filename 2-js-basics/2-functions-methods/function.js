function add(a,b) {
    return a+b;
}

function giveMeDateNow() {
    const date = new Date();
    console.log(date);
}

function presentation(name,age,displayAge=false){
    const myName = "Hello, i'm "+name;
    const myAge = ",and i have "+age;

    if(displayAge){
        return myName+myAge;
    } else {
        return myName;
    }

}

let sum = add(1,2);
giveMeDateNow();
let hello = presentation('Emeric',45);
