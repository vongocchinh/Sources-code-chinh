// const 
const a=1;

// a=2;//biến a đang xử dụng const nên giá trị không thể thay đổi
// console.log(a); 


// let
let arr=[1,2,3,4,5,6];
let total=0;
let arr1=[];
for(let i=0;i<arr.length;i++){
    total+=arr[i];
    let temp=arr[i];
    arr1[i]=temp;
}

// console.log(arr1);
console.log(`tong la :  ${total}`);

arr1.push(7);

console.log(`arr sau khi them 7 : ${arr1}`);
// scope fun





/*---------- vd về scope Block-Scoped Variables;---------------*/
let arrObject=[
    {id:1,name:"nguyen van a"},
    {id:2,name:"nguyen van b"}
]
const findIndexs=(arr,id)=>{
    let i=-1;
    for(let j=0;j<arr.length;j++){
        if(arr[j].id===id){
            i=j;
        }
    }
    return i;
}
const infoId=(id)=>{
    let index=findIndexs(arrObject,id);
    return arrObject[index];
}
console.log(`Thong tin name user cos id= 1 : `+infoId(1).name);
console.log(`Thong tin name user cos id= 2 : `+infoId(2).name);











/*----------------------- Arrow Functions-----------------*/


// +Expression Bodies
let array=[1,2,3,4,5,6];
const res=array.map((value)=>value+1);
console.log(`array sau khi phan tu cong 1 : ${res}`);
const res2=array.every(value=>value>2);
console.log("kiem tra all phan tu mang co lon hon > 2 :"+res2);
// +Statement Bodies
let arrAdd=[];
array.forEach(value=>{
    if(value%2===0){
        arrAdd.push(value);
    }
})
console.log(`Thêm phân từ vào arrAdd mới từ array với điều kiện value% 2: ${arrAdd} `);
// +Lexical this



// vd về arrow function
let arrObjectArrow=[
    {id:1,name:"nguyen van a"},
    {id:2,name:"nguyen van b"}
]
const findIndexArrow=(arr,id)=>{
    var i=arr.findIndex((value,key)=>{
        return value.id===id
    })
    return i;
}
const infoIdArrow=(id)=>{
    let index=findIndexArrow(arrObjectArrow,id);
    return arrObject[index];
}
console.log(`Thong tin name user arrow cos id= 1 : `+infoIdArrow(1).name);
console.log(`Thong tin name user arrow cos id= 2 : `+infoIdArrow(2).name);











/*------------- Extended Parameter Handling -----------------*/
// +Default Parameter Values
const f=(x,y=7,z=2)=>{
    return x+y+z;
}
console.log("f truyền vào 1 tham số : "+f(1));
console.log("f truyen vao 3 tham số : "+f(1,2,3));
console.log("f truyền vào 2 tham số : "+f(1,8));
// +Rest Parameter
const f2=(x,y,...a)=>{
    return (x+y)*a.length;
}
console.log("gia tri f nhan 2 tham so mặc định và array : "+f2(1,2,3,4,5,6));

// vd Rest Parameter

let arrRest=[ 
    {id:1,name:"nguyen van a"},
    {id:2,name:"nguyen van b"}
];

const functionFindIndex=(id,...arrs)=>{

    let user={};
    for(let i=0;i<arrs.length;i++){
        if(arrs[i].id===id){
            user=arrs[i];
        }
    }
    return user;
}


console.log("findIndex rest Parameter : "+functionFindIndex(1,...arrRest).name);



// +Spread Operator

var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
function f4 (x, y, ...a) {
    return (x + y) * a.length
}
console.log("result of f4 : "+(f4(1, 2, ...params) === 9));



var str = "chinh"
var chars = [...str ] 
console.log("convert chuoi sang array: "+chars);


let strArr= Object.values(str);
console.log("convert chuoi sang array: "+strArr);


// xóa các kí tự chữ trong chuoix sau:

console.log("vi du xoa ki tự số khỏi chuỗi");
var chuoi="vo12ngo34cchin97h";
var charChuoi=[...chuoi];
var newChuoi=charChuoi.filter(v=> (isNaN(v)));
console.log(newChuoi);
console.log("chuoi sau khi xóa : "+newChuoi.join("").toString());





/*--------------- Template Literals-----------------*/


var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

console.log("\nTemplate Literals   \n");
console.log(message);

var messageNew="Hello"+customer.name+" i am want going to "+card.product;
console.log(messageNew);