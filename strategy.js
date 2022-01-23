// 策略模式

class CashSuper{
    constructor(money){
        this.money = money;
    }

    acceptCash(money){
        // do something
    }
}

class CashNormal extends CashSuper{
    constructor(money){
        super();
        this.money = money;
    }

    acceptCash(money){
        return this.money;
    }
}

class CaseRebate extends CashSuper{
    constructor(moneyRebate, money){
        super();
        this.moneyRebate = moneyRebate;
        this.money = money; 
    }

    cashRebate(){
        this.moneyRebate = this.moneyRebate.toFixed(1);
    }

    acceptCash(){
        let finalMoney = null;
        finalMoney = this.money * this.moneyRebate;
        return finalMoney;
    }
}

class CashReturn extends CashSuper{
    constructor(moneyCondition, moneyReturn, money){
        super();
        this.moneyCondition = moneyCondition;
        this.moneyReturn = moneyReturn;
        this.money = money;
    }

    acceptCash(){
        let finalMoney = null;
        finalMoney = this.money - Math.floor(this.money/this.moneyCondition)*this.moneyReturn;
        return finalMoney;
    } 
}


class CashContext{

    cashContext(type){
        let cs = null; // 這是容器
        switch(type){
            case "正常收費":
                cs = new CashNormal;
                break;
            case "滿300送100":
                cs = new CashReturn(300,100);
                break;
            case "打8折":
                cs = new CaseRebate(0.8);
            break;
        }
        return cs
    }

    getResult(money){
        return cs.acceptCash(money)
    }

}

// 用戶輸入
purchase = new CashContext;

cs = purchase.cashContext("滿300送100"); 
cs2 = purchase.cashContext("打8折");
cs3 = purchase.cashContext("正常收費"); 

cs2.money = 1000
console.log(cs2.acceptCash())

// 試誤過程，請忽略以下
cs3.money = 10
console.log(cs3.acceptCash(1000));