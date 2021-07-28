class Person{
    constructor(id,name,gender) {
        this.id=id;
        this.name=name;
        this.gender=gender;
    }
    Info(name,gender){
        this.name=name;
        this.gender=gender;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getGender(){
        return this.gender;
    }
    setId(_id){
        this.id=_id;
    }
    setName(_name){
        this.name=_name;
    }
    setGender(_gender){
        this.gender=_gender;
    }
    toString(){
        return `Person  id : ${this.id} , name : ${this.name }, gender : ${this.gender}`;
    }
}


class User extends Person{
    constructor(id,name,gender,address,total) {
        super(id,name,gender);
        this.address=address;
        this.total=total;
    }
    getTotal(){
        return this.total;
    }

    setTotal(_total){
        this.total=_total;
    }
    getAddress(){
        return this.address;
    }
    setAddress(_address){
        this.address=_address;
    }
    toString(){
        return super.toString()+` address: ${this.address} , total : ${this.total}`
    }
    static defaultUser(){
        return new User('1','chinh','male','dn city',1000);
    }


    * doubleTotal(){
        return `user name : ${this.name} double : ${this.total*2} `;
    }
}


export {User};