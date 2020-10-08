const add = (a,b) => {
    return a+b;
}

console.log(add(55,45));

//this keyword

const user = {
    name:'Manjunath',
    cities:['Arehole','Navunda','Kundapura'],
    placesLived(){
        return this.cities.map(city => this.name + ' has lived in '+ city )
    }
};

console.log(user.placesLived());

//challenge area

const multiplier = {
    numbers:[1,2,3],
    multiplyBy:2,
    multiply(){
        return this.numbers.map(number => number*this.multiplyBy)
    }
};

console.log(multiplier.multiply());