// 觀察者模式

// 產品類別
class Subject{
    constructor(observer){
        let observer = []
        this.observer = observer
    }
    
    attach(observer){
        this.observer.append(observer)
    }
    
    detach(observer){
        this.observer.splice();
    }

    notify(){
        let oList = this.observer
        oList.forEach(o => o.update())
    }

}

class Observer{
    update(){

    }
}
    
//     ----------------
class ConcreteSubject extends Subject{
    constructor(subjectState){
        let subjectState = ""
    }
}

class ConcreteObserver extends Observer{
    constructor(subject, name){
        this.subject = subject;
        this.name = name;
    }

    update(){
        observerState = this.subject.SubjectState
        console.log("",)
    }

}