var nameVar="Manjunath";
var nameVar="Dinesh";   
console.log('nameVar', nameVar);

let nameLet='Poojary';
nameLet="Manjunath Poojary";
console.log('nameLet',nameLet);

const nameConst = "Babu";
console.log('nameConst',nameConst);

//block scoping

var fullName="Manjunath Poojary";

if(fullName){
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}
 
