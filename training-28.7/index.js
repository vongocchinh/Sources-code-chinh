
/*-----Enhanced Object Properties-----*/

//Property Shorthand

var name="chinh",gender="male";
var user={name,gender};
let arr1=[];
arr1.push(user);

//Computed Property Names
const quux=()=>{
    let a=1;b=1;
    return a+b;
};
let obj = {
    foo: "bar",
    ["baz" + quux()]: 42
}
// console.log("obj : "+obj);

//Method Properties 

var obj2 = {
    add (a, b) {
        console.log("a+b= "+(Number(a)+Number(b)));
    },
    sub (x, y) {
        console.log("x-y= "+(x-y));
    },
    multiplication (x, y) {
        console.log("x*y= "+(x*y));
    },
    division(){
        console.log("division");
    }
}
obj2.add(5,5);
obj2.multiplication(4,2);
obj2.multiplication(1,2);
obj2.division()



/*-----Destructuring Assignment----*/

//Array Matching

var array=[1,2,3,4];    

var [a,,b,]=array;
[b,a]=[a,b];
console.log([b,a]);

//Object Matching, Shorthand Notation
var cat = 'Miaow';
var dog = 'Woof';
var bird = 'Peet peet';

var someObject = {
  cat: cat,
  dog: dog,
  bird: bird,
  user:{
      name:"papa"
  }
}

var {bird,cat,dog,user:{name:uName}}=someObject;

console.log(`bird of someObject : ${bird}`);
console.log(`User name of someObject : ${uName}`);

//Object And Array Matching, Default Values

var obj3 = { a: 1 }
var list = [ 1 ]
var { a, b = 2 } = obj3
var [ x, y = 2 ] = list
var obj3new={a,b};
var listNew=[x,y];
console.log(obj3new);
console.log(listNew);


//Parameter Context Matching

function f ([ name, val ]) {
    console.log(name, val)
}
function g ({ name: n, val: v }) {
    console.log(n, v)
}
function h ({ name, val }) {
    console.log(name, val)
}
f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })



/*------Modules-------*/
//Value Export/Import
function logInfoUser(id,arr){
    return arr.find((value,key)=>value.id===id);
}

export {logInfoUser};

var arr3=[{
    id:'1',name:'nguyem van a'
},{
    id:'2',name:'Nguywn vawn b'
}]



console.log(logInfoUser('1',arr3));


/*------Classes------*/
//Class Definition

import {User} from './model/user.js';

var User1=User.defaultUser();
var User2=new User("123","Nguyen  van A" , "male", "QN",1000);
var User3=new User("234","Nguyen  van C" , "female", "DN",1000);
var User4=new User("456","Nguyen  van E" , "male", "QN",1000);
var User5=new User("567","Nguyen  van D" , "female", "QB",1000);
var User6=new User("678","Nguyen  van B" , "male", "HN",1000);

var arrClass=[];

arrClass.push(User4,User2,User3,User5,User6);
console.log("Arr sau khi add user ");
console.log(arrClass);

console.log("User ở QN : ");
console.log(arrClass.filter((value,key)=>value.getAddress()==="QN"));

import {deleteUser} from './function/deleteUser.js';

deleteUser(arrClass,'123');

console.log("arr sau khi xoas id = 123 và size arr "+arrClass.length);
console.log(arrClass);


import {Sort} from './function/Sort.js'

Sort(arrClass);

console.log("arr sau khi sort");
console.log(arrClass);


console.log("double total user ");
arrClass.forEach(value=>{
    console.log(value.doubleTotal().next().value)
})



let food={
    * cake(){
        return "this is cookie";
    }
}
console.log(`Get value cake from obj food : ${food.cake().next().value}`);