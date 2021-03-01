class Cat{
    constructor(name){
        this.name = name
    }
    speak(){
      return `${this.name} says meow!`
    }
}

class Dog{
    constructor(name){
        this.name = name
    }
    speak(){
      return `${this.name} says woof!`

    }
}

class Bird{
    constructor(name){
        this.name = name
    }
    speak(){
        if(this.name === "Mable"){
      return `${this.name} says squawk!`
        }else{
      return `It's me! ${this.name}, the parrot!`
        }

    }
}