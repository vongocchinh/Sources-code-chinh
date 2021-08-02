function flip(math:number){
    return 10 > math ? 1 : 0;
 }

 console.log(flip(12));



 function greet(person:string, date:string) {
    console.log(`Hello ${person}, today is ${date}!`);
  }
  greet("Brendan","abv")


let arr:Array<number>=[1,2,3,4,5]
arr.forEach((v:number)=>{
    console.log(v);
})


const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function
names.forEach((v:string)=>{
    console.log(v.toUpperCase());
})


var food={
    food1:'a',
    food2:'b'
}

const printFood=(obj:object)=>{
    console.log(obj);
}
printFood(food);


const printFoods=(obj:{obj1:string,obj2:string})=>{
    console.log(obj.obj1);
}

printFoods({obj1:"a",obj2:"b"});

console.log(Array.isArray(arr));



type UserInputSanitizedString = string;

function sanitizeInput(str: number) :UserInputSanitizedString {
  return (str).toString();
}

console.log(sanitizeInput(1));

const x = "hello" as string;
console.log(x);











/*--------class-----------------*/

interface p{
    name:string,
    age:string,
    count:number
}



class person{
    public name:string;
    public age:string;
    public count:number;
    constructor(p:p) {
        this.name=p.name;
        this.age=p.age;
        this.count=p.count;
    }

    setName(name?:string):void{
        this.name=name;
    }
    setAge(age:string):void{
        this.age=age;
    }
    getName():string{
        return this.name;
    }
    getAge():string{
        return this.age;
    }


    setCount(count:number):void{
        this.count=count;
    }
    getCount():number{
        return this.count;
    }

    toString():string{
       return (`Name : ${this.getName()} and age : ${this.getAge()}  and count : ${this.getCount()}`);
    }

}


let ArrPerson:person[]=[];




const p1:person=new person({name:"nguyen van a",age:"20",count:20});

const p2:person=new person({name:"nguyen van b",age:"21",count:22});


ArrPerson.push(p1,p2);


function PrintPerson(p:Array<person>):void{
    p.forEach((v:person)=>{
        console.log(v.toString());
    })
}

PrintPerson(ArrPerson);



function countPersonDouble(count:number):number{
    return count*2;
}

ArrPerson.forEach((v:person)=>{
    console.log(countPersonDouble(v.getCount()));
})



function printName(name:string):string{
    return name.toUpperCase();
}



ArrPerson.forEach((v:person)=>{
    console.log(printName(v.getName()));
    
})





class Student extends person{
    private english:number;
    private math:number;

    constructor(p:p,english:number,math:number){
        super(p);
        this.english=english;
        this.math=math;
    }

    getEnglish():number{
        return this.english;
    }

    getMath():number{
        return this.math;
    }

    toString():string{
        return  `${super.toString()} english: ${this.getEnglish()} and math : ${this.getMath()}`;
    }
}


let ArrStudent:Student[]=[];

const s1= new Student(p1,10,10);

ArrStudent.push(s1);

ArrStudent.forEach((s:Student)=>{
    console.log(s.toString());
})