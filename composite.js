// 組合模式

class Company{
    constructor(name){
        this.name = name;
    }

    attach(company){};
    detach(company){};
    display(depth){};
    lineOfDuty(company){};
}

class ConcreteCompany extends Company{
    constructor(name,depth){
        super();
        let children = [];
        this.children = children;
        this.name = name;
    }

    attach(company){
        this.children.push(company);
    }

    detach(company){
        let temp = this.children.findIndex((element) => element === company);
        delete this.children[temp];
    }

    display(depth){
        let tempDisplay = "-";
        console.log(tempDisplay.repeat(depth), this.name);
        for(let i=0; i<this.children.length;i++){
            if(this.children[i] != null && this.children[i] != ""){
                this.children[i].display(depth+2);
            }
        }
    }

    lineOfDuty(){
        console.log("-", this.name);
        for(let i=0; i<this.children.length;i++){
            if(this.children[i] != null && this.children[i] != ""){
                this.children[i].lineOfDuty();
            }
        }
    }
}

// 公司具體化：人資部
class HRDepartment extends Company{
    constructor(name){
        super();
        this.name = name;
    }

    attach(company){};

    detach(company){};

    display(depth){
        let tempDisplay = "-";
        console.log(tempDisplay.repeat(depth), this.name);
    }

    lineOfDuty(){
        console.log(`${this.tempDisplay} ${this.name} 員工招募教育訓練管理`);
    }
}

// 公司具體化：財務部
class FinDepartment extends Company{
    constructor(name){
        super();
        this.name = name;
    }

    attach(company){};

    detach(company){};

    display(depth){
        let tempDisplay = "-";
        console.log(tempDisplay.repeat(depth), this.name);
    }

    lineOfDuty(){
        console.log(`${this.tempDisplay} ${this.name} 公司財務管理`);
    }
}

// 客戶端
headQuarter = new ConcreteCompany("北京總公司");
headQuarter.attach(new HRDepartment("北京總公司人資部"));
headQuarter.attach(new FinDepartment("北京總公司財務部"));

NYoffice = new ConcreteCompany("紐約分公司");
NYoffice.attach(new HRDepartment("紐約分公司人資部"));
NYoffice.attach(new FinDepartment("紐約分公司財務部"));
headQuarter.attach(NYoffice);

NJoffice = new ConcreteCompany("南京辦事處");
NJoffice.attach(new HRDepartment("南京辦事處人資部"));
NJoffice.attach(new FinDepartment("南京辦事處財務部"));
headQuarter.attach(NJoffice);

KHoffice = new ConcreteCompany("高雄辦事處");
KHoffice.attach(new HRDepartment("高雄辦事處人資部"));
KHoffice.attach(new FinDepartment("高雄辦事處財務部"));
headQuarter.attach(KHoffice);

console.log("結構圖\n");
headQuarter.display(1);

// console.log("\n\n技能樹\n");
// headQuarter.lineOfDuty();
