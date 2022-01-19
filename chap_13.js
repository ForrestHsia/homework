// 建造者模式

// 產品類別
class Product{
    //let partDetail = []，其內涵為這個part所需要的部件
    constructor(partDetail){
        let partDetail = [];
        this.partDetail = partDetail;
    }

    // 逐步確認part所需之detail
    partAdd(a){
        this.partDetail.append(a);
    }

    // i為part所需之每個部件，逐步打印確認
    partShow(){
        this.partDetail.foreach(i => console.log(i))
    }
}

// 建造者，抽象類別
class Builder{
    constructor()


}