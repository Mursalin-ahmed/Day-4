class parent{
    hello1(parents){
        console.log("Hello 1 Function");
    }
    hello2(parents){
        console.log("Hello 2 Function");
    }
}
class child extends parent{
    hello2(parents){
        console.log("Method overriding");
    }
}
var obj = new child();
obj.hello1();
obj.hello2();