// 狀態模式

// 為負面教材

// 如何修正？
// 如何修正？
// 如何修正？
// 如何修正？
// 如何修正？
// 如何修正？
// 如何修正？

class State{
    writeProgram(w){
        // do some thing
    }
}

class Work{
    constructor(){
        let current = null;
        this.current = current;

        let Hour = "";
        this.Hour = Hour;

        let taskFinished = false;
        this.taskFinished = taskFinished;

        this.workInit();
    }
    
    workInit(){
        this.current = new ForenoonState();
    }

    setState(s){
        this.current = s;
    }

    writeProgram(){
        this.current.writeProgram(this);
    }
}

class ForenoonState extends State{
    writeProgram(w){
        if(w.Hour < 12){
            console.log("現在時間是",w.Hour,"精神百倍");
        }else{
            w.setState(new NoonState);
            w.writeProgram();
        }
    }
}

class NoonState extends State{
    writeProgram(w){
        if(w.Hour < 13){
            console.log("現在時間是",w.Hour,"吃午飯了");
        }else{
            w.setState(new AfternoonState);
            w.writeProgram();
        }
    }
}

class AfternoonState extends State{
    writeProgram(w){
        if(w.Hour < 17){
            console.log("現在時間是",w.Hour,"下午繼續幹");
        }else{
            w.setState(new EveningState);
            w.writeProgram();
        }
    }
}

class EveningState extends State{
    writeProgram(w){
        if(w.taskFinished){
            w.setState(new RestState);
            w.writeProgram();
        }else{
            if(w.Hour<21){
                console.log("現在時間是",w.Hour,"幹要加班了");
            }else{
                w.setState(new SleepState);
                w.writeProgram();
            }
        }
    }
}

class SleepState extends State{
    writeProgram(w){
        console.log("現在時間是",w.Hour,"我邊睡邊幹");
    }
}

class RestState extends State{
    writeProgram(w){
        console.log("現在時間是",w.Hour,"工作結束了");
    } 
}

work = new Work;

work.taskFinished = true;
work.writeProgram();

// 如果我在17:00以前完成工作的話程式會包掉
// 因為我沒有從一開始的ForenoonState接下去，work會找不到RestState
work.Hour = 14;
work.writeProgram();