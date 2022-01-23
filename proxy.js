// 代理模式

class IGiveGift{

    giveDolls(){
        // 送娃娃
    };

    giveFlowers(){
        // 送花
    };

    giveChocolate(){
        // 送巧克力
    };

}
class Girl{
    constructor(name){
        this.name = name
    }

}
class Pursuit extends IGiveGift{
    constructor(girl,name){
        super();
        this.girl = girl;
        this.name = name
    }

    giveDolls(){
        console.log(`${this.girl.name}，這是${this.name}買的娃娃，請跟${this.name}交往！`)
    };

    giveFlowers(){
        console.log(`${this.girl.name}，這是${this.name}買的花，請跟${this.name}交往！`)
    };

    giveChocolate(){
        console.log(`${this.girl.name}，這是${this.name}買的巧克力，請跟${this.name}交往！`)
    };
}

class Proxy extends IGiveGift{
    constructor(pursuit,girl,name){
        super();
        pursuit = new Pursuit(girl, pursuit);
        this.pursuit = pursuit;
    }

    giveDolls(){
        this.pursuit.giveDolls();
    }; 

    giveFlowers(){
        this.pursuit.giveFlowers();
    }; 

    giveChocolate(){
        this.pursuit.giveChocolate();
    }; 
}


// 用戶端
jiaojiao = new Girl("嬌嬌");

daili = new Proxy("卓賈意", jiaojiao, "daili");

daili.giveDolls();
daili.giveFlowers();
daili.giveChocolate();

