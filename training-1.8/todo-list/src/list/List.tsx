import React from 'react'

interface ListTS {
    arr: Array<Users>,
    onDelete:deleteUser
}
const List: React.FC<ListTS> = ({ arr,onDelete }) => {

    return (
        <>
            <div className="item item-1">
                <p>Stt</p><p>Name</p><p>Age</p><p></p>
            </div>
            {arr.map((value, key) => {
                return (
                    <div key={key} className="item">
                        <p>{key}</p><p>{value.name}</p><p>{value.age}</p><p onClick={()=>{onDelete(value.id)}} >X</p>
                    </div>
                )
            })}

        </>
    )
}
export default List;