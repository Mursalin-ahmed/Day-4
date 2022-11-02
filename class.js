class MyClass{
    MyFun(name1){
        console.log(name1);
    }
    MyFun2(){
        console.log("I am a funtion2 inside the class");
    }
    MyFun3(){
        console.log("I am a funtion3 inside the class");
    }

}

var obj = new MyClass;
obj.MyFun("Pranto");
obj.MyFun2();