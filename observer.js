// 觀察者模式

// 這是通知者介面
class Subject{
    constructor(){
        let SubjectState = "";
        this.SubjectState = SubjectState;
    }

    attach(observer){};
    detach(observer){};
    notify(){
        // do something
    };
}

// 通知者是老闆
class BossSubject extends Subject{
    constructor(){
        super()
        let observers = [];
        this.observers = observers;
    }

    attach(observer){
        this.observers.push(observer);
    }

    detach(observer){
        let temp = this.observers.findIndex((o) => o === observer);
        delete this.observers[temp];
    }

    notify(){
        this.observers.forEach(function(o) {
            o.update();
        });
    }
}

class Observer{
    constructor(name, Subject){
        this.name = name;
        this.Subject = Subject;
    }

    update(){
        // do something
    }
}

class StockObserver extends Observer{
    constructor(name, Subject){
        super();
        this.name = name;
        this.Subject = Subject;
    }

    update(){
        console.log(`${this.Subject.SubjectState}，${this.name}，股票關起來！！！`);
    }
}

class MLBObserver extends Observer{
    constructor(name, Subject){
        super();
        this.name = name;
        this.Subject = Subject;
    }

    update(){
        console.log(`${this.Subject.SubjectState}，${this.name}，比賽關起來！！！`);
    }
}

// 使用者端

hu = new BossSubject;

stock1 = new StockObserver("瑋俊stock1", hu)
stock2 = new StockObserver("瑋俊stock2", hu)
mlb1 = new MLBObserver("瑋俊mlb1", hu)
hu.attach(stock1)
hu.attach(stock2)
hu.attach(mlb1)

hu.SubjectState = "我回來了"
hu.notify()

hu.detach(stock1)
hu.SubjectState = "老闆走了，開起來"
hu.notify()