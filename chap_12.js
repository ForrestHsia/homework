// facade
class Stoc1{
    constructor(stockCode){
        this.stockCode = stockCode
    }
    sell(){
        console.log("Stock ", this.stockCode, " is selling." )
    }

    buy(){
        console.log("Stock ", this.stockCode, " is Buying." )
    }
}

class Stoc2{
    constructor(stockCode){
        this.stockCode = stockCode
    }
    sell(){
        console.log("Stock ", this.stockCode, " is selling." )
    }

    buy(){
        console.log("Stock ", this.stockCode, " is Buying." )
    }
}

class Stoc3{
    constructor(stockCode){
        this.stockCode = stockCode
    }
    sell(){
        console.log("Stock ", this.stockCode, " is selling." )
    }

    buy(){
        console.log("Stock ", this.stockCode, " is Buying." )
    }
}

class Debt1{
    constructor(debtCode){
        this.debtCode = debtCode
    }
    sell(){
        console.log("Debt ", this.debtCode, " is selling." )
    }

    buy(){
        console.log("Debt ", this.debtCode, " is Buying." )
    }
}

class Debt2{
    constructor(debtCode){
        this.debtCode = debtCode
    }
    sell(){
        console.log("Debt ", this.debtCode, " is selling." )
    }

    buy(){
        console.log("Debt ", this.debtCode, " is Buying." )
    }
}

class Reality1{
    constructor(realityCode){
        this.realityCode = realityCode
    }
    sell(){
        console.log("Reality ", this.realityCode, " is selling." )
    }

    buy(){
        console.log("Reality ", this.realityCode, " is Buying." )
    }
}



class Fund{

    fundInit(){
        // funcInit()大小，視來源組合而定
        // 上述的stock / debt / reality等物件，或可用簡單工廠生成
        s1 = new Stoc1
        s2 = new Stoc2
        s3 = new Stoc3

        d1 = new Debt1
        d2 = new Debt2

        r1 = new Reality1
    }

    fundBuy11(){
        s1.buy()
    }

    fundBuy11(){
        s1.buy()
        d1.buy()
    }

    fundBuy21(){
        s2.buy()
        d1.buy()
    }

    fundBuy111(){
        s1.buy()
        d1.buy()
        r1.buy()
    }

    fundSell1(){
        s1.sell()
    }

    fundSell12_1(){
        s1.sell()
        s2.sell()
        d1.sell()
    }
}

// 客戶調用
temp = new Fund
fund = temp.fundInit()

// fund是將所有操作項目初始化後，要開始操作的基金
// 視操作需求調用所需之function
fund.fundSell1
fund.fundBuy111

fund.fundBuy21

