// 獨體模式
// 透過JS function達成

// 閉包方式
let Singles = (function(){
    let cache;
    return function(){
    if(typeof cache === "object") return cache;
        this.s = "public";
        cache = this;
    }
});

// 變數標記方式
let Single = function(){
    if(typeof Single.cache === "object") return Single.cache;
        this.s = "public";
        Single.cache = this;
};


let s1 = new Single();
let s2 = new Single();
console.log(s1 === s2);
