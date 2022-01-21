// 職責鏈模式

class Request{
    constructor(){
        let requestType;
        this.requestType = requestType;

        let requestContent;
        this.requestContent = requestContent;

        let number;
        this.number = number; 
    }
}

class Manager{
    constructor(name){
        this.name = name;
    }

    setSuperior(superior){
        this.superior = superior;
    }

    requestApplication(request){};
}

class CommonManager extends Manager{
    constructor(name){
        super();
        this.name = name;
    }
    
    requestApplication(request){
        if(request.requestType == "請假" && request.number <=2){
            console.log(`${this.name} : ${request.requestContent}，數量 : ${request.number}，${this.name}核可`);
        }else{
            if(this.superior != null || this.superior != ""){
                // CommonManager的superior要接受CommonManager提出的request
                this.superior.requestApplication(request);
            }
        }
    }
}

class Majordomo extends Manager{
    constructor(name){
        super();
        this.name = name;
    }
    
    requestApplication(request){
        if(request.requestType == "請假" && request.number <=5){
            console.log(`${this.name} : ${request.requestContent}，數量 : ${request.number}，${this.name}核可`);
        }else{
            if(this.superior != null || this.superior != ""){
                // CommonManager的superior要接受CommonManager提出的request
                this.superior.requestApplication(request);
            }
        }
    }
}

class GeneralManager extends Manager{
    constructor(name){
        super();
        this.name = name;
    }
    
    requestApplication(request){
        if(request.requestType == "請假" && request.number){
            console.log(`${this.name} : ${request.requestContent}，數量 : ${request.number}，${this.name}核可`);
        }else if(request.requestType == "加薪" && request.number <=5000){
            console.log(`${this.name} : ${request.requestContent}，數量 : ${request.number}，${this.name}核可`);       
        }else if(request.requestType == "加薪" && request.number >5000){
                // CommonManager的superior要接受CommonManager提出的request
                console.log(`${this.name} : ${request.requestContent}，數量 : ${request.number}，${this.name}駁回`);
            }
    }
}


chiuChangRong = new CommonManager("丘昌榮");
linHwaWei = new Majordomo("林華韋");
tsaiChengRu = new GeneralManager("蔡承儒");

chiuChangRong.setSuperior(linHwaWei);
linHwaWei.setSuperior(tsaiChengRu);

linIChaunRequest = new Request;
linIChaunRequest.requestType = "加薪";
linIChaunRequest.requestContent = "林益全要加薪";
linIChaunRequest.number = 100000;

tsaiChengRu.requestApplication(linIChaunRequest);

huJingLongRequest = new Request;
huJingLongRequest.requestType = "請假";
huJingLongRequest.requestContent = "胡金龍要坐冷板凳";
huJingLongRequest.number = 500;
chiuChangRong.requestApplication(huJingLongRequest);