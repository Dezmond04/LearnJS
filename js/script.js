'use scrict';

class First {
    constructor () {

    }
    hello() {
        console.log('Привет, я метод родителя');
    }
}

const first = new First();

class Second extends First {    
    sayHello() {
        super.hello();
        console.log('А я наследуемый метод');
    }
}

const second = new Second();

second.sayHello();




