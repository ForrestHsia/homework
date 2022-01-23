// 轉接器模式

class Player{
    constructor(name){
        this.name = name;
    }
    pitch(){
        // do something
    };

    hit(){
        // do something, amigo.
    };
}

class TWNPitcher extends Player{
    constructor(name){
        super();
        this.name = name;
    }

    pitch(){
        console.log(`該你投球了，${this.name}！`)
    }
}

class TWNFielder extends Player{
    constructor(name){
        super();
        this.name = name;
    }

    hit(){
        console.log(`該你打擊了，${this.name}！`)
    }
}

class DOMFielder{
    constructor(name){
        this.name = name;
    }

    hitDom(){
        console.log(`time to give me a homerun, amigo ${this.name}`);
    }
}

class Translator extends Player{
    constructor(name){
        super();
        let DOMfielder1 = null; 
        DOMfielder1 = new DOMFielder(name);
        this.player = DOMfielder1
    }

    hit(){
        this.player.hitDom();
    }   
}

// 用戶端
wang40 = new TWNPitcher("王建民");
zho16 = new TWNFielder("周思齊");
translator = new Translator("赫雷拉")

wang40.pitch();
zho16.hit();
translator.hit();
