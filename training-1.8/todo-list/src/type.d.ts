type Users={
    id:string,
    name:string,
    age:string
}

type ArrayUser=Array<Users>;


type addUser=(user:Users)=>void;

type deleteUser=(id:string)=>void;