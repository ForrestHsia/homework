// 轉接器模式
// 模式使用狀況條件
// 教練是葉基八，然後有個 DOM 球員赫基八
// 業績八可以 "直接" 操縱 林智勝，讓他打安打或者守備，但沒辦法 "直接" 操縱 赫基八
// 業績八不懂洋文 (換成物件導向的狀況，就是 物件A 無法調用 物件B，可是 物件A 又需要 物件B 的某function 或者something)
// 這時，可以設一個腳色叫做翻譯，也就是謝基八
// 業績八 -直接操縱-> 謝基八 -直接操縱-> 赫基八
//   |                                  ↑
//   ↓______________間接操縱_____________|

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
// helayla = new DOMFielder("赫基八")
translator = new Translator("赫基八")

wang40.pitch();
zho16.hit();
// helayla.hitDom();
translator.hit();
