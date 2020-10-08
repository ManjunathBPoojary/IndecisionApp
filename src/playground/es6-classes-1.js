class Person {
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        //return 'Hi, I am '+this.name+' !';
        return `Hi, I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person{
    constructor(name, age, branch){
        super(name, age);
        this.branch = branch;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.branch){
            description += `Their branch is ${this.branch}.`;
        }
        return description;
    }
}

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let travellerGreeting = super.getGreeting();
        if(this.homeLocation){
            travellerGreeting+=`I'm visiting from ${this.homeLocation}`;
        }
        return travellerGreeting;
    }
}

const me = new Traveller('Manjunath B Poojary',22,'Kundapura');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());