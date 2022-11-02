class Myclass{

    constructor(a,b){
        console.log("Hellow I am constructor");
        console.log(a+b);
        this.firstNum = a;
        this.secondNum = b;
    }
    add() {
        let result = this.firstNum + this.secondNum
        console.log(result);
        
    }
}

var obj = new Myclass(10,20);
obj.add();