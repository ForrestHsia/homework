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
    
    static calculate(numberA,numberB){
        caculateResult = numberA+numberB;
        return caculateResult;
    }

}

class OpeMin extends Operation{

    static calculate(numberA,numberB){
        caculateResult = numberA-numberB;
        return caculateResult;
    }

}

class OpeMul extends Operation{

    static calculate(a,b){
        caculateResult = this.numberA*b
        return caculateResult;
    }

}

class OpeDiv extends Operation{

    static calculate(){
        if(this.numberB === 0){
            result = "undefined";
            return caculateResult;
        } 
        caculateResult = this.numberA / this.numberB;
        return caculateResult;
    }

}

class OperationFactory{

    static createOperate(operator){

        let oper = null;

        switch(operator){
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

o = "-"
calculation = OperationFactory.createOperate(o)
calculation.numberA=1
calculation.numberB=2
console.log(calculation)
result = calculation.caculate()
console.log(result)