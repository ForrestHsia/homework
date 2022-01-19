// 計算機簡單工廠模式
class Operation{
    constructor(a,b){
        this.numberA = a;
        this.numberB = b;
    }

    calculate(a,b){
        let caculateResult = 0;
        return caculateResult;
    }  
}

class OpeAdd extends Operation{
    
    calculate(){
        let calculateResult = 0
        calculateResult = this.numberA+this.numberB;
        return calculateResult;
    }

}

class OpeMin extends Operation{
    
    calculate(){
        let calculateResult = 0
        calculateResult = this.numberA-this.numberB;
        return calculateResult;
    }
}

class OpeMul extends Operation{

    calculate(){
        let calculateResult = 0
        calculateResult = this.numberA*this.numberB;
        return calculateResult;
    }

}

class OpeDiv extends Operation{

    calculate(){
        let calculateResult = 0
        if(this.numberB === 0){
            result = "undefined";
            return calculateResult;
        } 
        calculateResult = this.numberA / this.numberB;
        return calculateResult;
    }

}

class OperationFactory{
    constructor(operator){
        this.operator = operator;
    }
    createOperate(){
        let oper = null;
        switch(this.operator){
            case "+":
                oper = new OpeAdd();
                break;
            
            case "-":
                oper = new OpeMin();
                break;
            
            case "x":
                oper = new OpeMul();
                break;

            case "/":
                oper = new OpeDiv();
                break;
        }
        return oper
    }
}

o = "/"
a = new OperationFactory(o)
cal = a.createOperate()
cal.numberA=0.1
cal.numberB=0

result = cal.calculate()
console.log(result)