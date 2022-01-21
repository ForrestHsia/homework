// 建造者模式

// 產品類別
class Product{

    // 添加part所需之客製化，視個體需求加入
    partAdd(partDetail){

        //可以選這個
        // this.part.append(partDetail);

        // 或者是
        this[partDetail] = partDetail; 
    }

    // i為partDetail內之元素，逐項打印確認
    partShow(){
        let keys = null;
        let theKey = this;
        keys = Object.keys(this).sort();
        var tmp = [];
        keys.forEach(function (k) {
            if (theKey[k] != "" || theKey[k] != null ){
            tmp.push(k + "=" + theKey[k]);}
        });
        console.log(tmp);
    }

}

// 建造者，抽象類別
class Builder{
    constructor(part){
        this.part = part;
    }
    buildPartA(){
        let partA = "" ;
        make(partA) = "A";
        this.part[partA] = partA;
    };
    buildPartB(){
        let partB = "" ;
        make(partB) = "B";
        this.part[partB] = partB;
    };

    buildPartC(){
        let partC = "" ;
        make(partC) = "C";
        this.part[partC] = partC;
    };
    buildPartD(){
        let partD = "" ;
        make(partD) = "B";
        this.part[partD] = partD;
    };
    
    // 或可以是以下，需視情況調用
    // buildPolish(){
    //     polish(this.part)
    // };

    getResult(){
        let finalPart = null;
        finalPart = this.part;
        return finalPart;
    };
}

class WLM extends Builder{
    
    constructor(product){
        super();
        product = new Product;
        this.product = product;
    }

    buildPartA(){
        let partA = "" ;
        partA = "烏龍麵";
        this.product[partA] = partA;
    };

    buildPartB(){
        let partB = "" ;
        partB = "湯";
        this.product[partB] = partB;
    };

    getResult(){
        let finalPart = null;
        finalPart = this.product;
        return finalPart;
    }

}

class PTIM extends Builder{
    
    constructor(product){
        super()
        product = new Product;
        this.product = product
    }

    buildPartC(){
        let partC = "" ;
        partC = "泡菜";
        this.product[partC] = partC;
    };

    buildPartD(){
        let partD = "" ;
        partD = "意麵";
        this.product[partD] = partD;
    };

    getResult(){
        let finalPart = null;
        finalPart = this.product;
        return finalPart;
    }

}

class WLMDirector{
    
    construct(builder){
        this.builder = builder;
        this.builder.buildPartA();
        this.builder.buildPartB();
    }

    getResult(){
    let finalPart = null;
    finalPart = this.builder;
    return finalPart;
    }
}

class PTIMDirector{
    
    construct(builder){
        this.builder = builder;
        this.builder.buildPartC();
        this.builder.buildPartD();
    }

    getResult(){
    let finalPart = null;
    finalPart = this.builder;
    return finalPart;
    }
}

// 客戶端

// 烏龍麵指揮者
wlmDirector = new WLMDirector();

// 泡菜意麵指揮者
ptimDirector = new PTIMDirector();

// 要烏龍麵跟泡菜意麵
wlm = new WLM();
ptim = new PTIM(); 

wlmDirector.construct(wlm);
wlm1 = wlm.getResult();
wlm1.partShow()