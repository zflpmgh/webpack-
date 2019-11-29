import '../css/app.css'

class People{   
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayhello(){
        console.log(`你好，我叫${this.name}`)
    }
}

var xm=new People('小明',18);
xm.sayhello();
