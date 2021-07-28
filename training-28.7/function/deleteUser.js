const deleteUser=(arr,id)=>{
    var index =arr.findIndex(value=>value.getId()===id);
    if(index!==-1){
        arr.splice(index,1);
    }
}
export {deleteUser};