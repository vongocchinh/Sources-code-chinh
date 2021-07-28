const Sort=(arr)=>{
    arr.sort((a,b)=>{
        return a.getName().localeCompare(b.getName())
    });
}

export {Sort};