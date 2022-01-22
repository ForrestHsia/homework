// 工廠模式

class RootFactory{
    constructor(){
    };

    createNightingale(){
        // verb here
    };
}

class StudentFacory extends RootFactory{
    constructor(){
        super();
    }

    createNightingale(name){
        return new Student(name);
    }
}

class SocialWorkerFactory extends RootFactory{
    constructor(){
        super();
    }

    createNightingale(name){
        return new SocialWorker(name);
    }
}

class Nightingale{
    constructor(name){
        this.name = name;
    }

    sweep(){
        console.log(`${this.name} 掃地`);
    }

    lundry(){
        console.log(`${this.name} 洗衣`);
    }

    cook(){
        console.log(`${this.name} 做飯`); 
    }
}

class Student extends Nightingale{
    constructor(name){
        super();
        this.name = name
    } 
}

class SocialWorker extends Nightingale{
    constructor(name){
        super();
        this.name = name
    }
}

studentFacory = new StudentFacory;
socialWorkerFactory = new SocialWorkerFactory;

student1 = studentFacory.createNightingale("小美眉");
socialworker1 = socialWorkerFactory.createNightingale("美眉"); 

console.log(student1)
console.log(socialworker1)