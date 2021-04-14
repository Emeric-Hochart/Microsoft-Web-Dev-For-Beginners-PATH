let myArray = ['Blue','White','Red','Green','Black','Pink','Grey'];

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i].toUpperCase());
}
console.log(myArray);

myArray.forEach(color=>console.log(color.toUpperCase()));
console.log(myArray);

const myNewArray = myArray.map(color=>{    
    return color.toLowerCase();
});
console.log(myNewArray);
