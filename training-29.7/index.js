/*-------Map/Set & WeakMap/WeakSet------*/
//Set Data-Structure


let s=new Set();
s.add("Hi").add("Hello")

s.forEach((value,key)=>{
    console.log(`${value} : key = ${key}`);
})

for (let index of s ) {
    console.log(index);
}

console.log(s.size);

//Map Data-Structure
let m=new Map();
m.set("Nguyen van B",19);
m.set("Nguyen van A",20);

m.forEach((value,key)=>{
    console.log(key+" : "+value);
})

console.log("------------");

for(let [key,value] of m){
    console.log(key+" : "+value);
}


console.log("------------");

console.log(m.get("Nguyen van B"));
console.log(m.get("Nguyen van A"));




/*-----New Built-In Methods------*/


var user={
    id:'1'
}


var user_name={
    name:"nguyen van a"
}


var user_count={
    count:10
}
var user2={
    id:'2'
}


Object.assign(user,user_name,user_count);
Object.assign(user2,user_name,user_count);


let arrUsers=[];
arrUsers.push(user);
arrUsers.push(user2);



var userFind=arrUsers.find(value=>value.id==='1')
console.log(`User name id=1 la : ${userFind.name} `);


console.log(userFind.name.repeat(3));





/*-----Promises-----*/


function getUser(id,arr){
    return arr.find(v=>v.id===id);
}


function msgAfterTimeout (id, arr, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(getUser(id,arr)), timeout)
    })
}




msgAfterTimeout("1", arrUsers, 100).then((res) =>{
    console.log("sau 100");
    console.log(res);
    msgAfterTimeout('2',arrUsers, 200).then(res=>{
        console.log("sau 200");
        console.log(res);
    })
})









// ---------------
function getUserAll(){
    var user={
        id:'1'
    }

    var user_name={
        name:"nguyen van a"
    }

    var user_count={
        count:10
    }
    var user2={
        id:'2'
    }
    var user3={
        id:'3'
    }
    Object.assign(user,user_name,user_count);
    Object.assign(user2,user_name,user_count);
    Object.assign(user3,user_name,user_count);
    let arrUsers=[];
    arrUsers.push(user);
    arrUsers.push(user2);
    return arrUsers;
}


function fetchApiUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(getUserAll());
        }, 5000);
    })
}


fetchApiUser().then(res=>{
    console.log("after 5000s");
    console.log(res);
});

Promise.all([
    msgAfterTimeout('1',arrUsers,1000),
    msgAfterTimeout('2',arrUsers,3000)
]).then(res=>{
    console.log("Get all");
    console.log(res);
})


/*---------Internationalization & Localization------------*/

var list = [ "ä", "a", "z" ]
var l10nDE = new Intl.Collator("de")
var l10nSV = new Intl.Collator("sv")
l10nDE.compare("ä", "z") === -1
l10nSV.compare("ä", "z") === +1

console.log(list.sort(l10nDE.compare));