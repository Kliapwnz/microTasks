import React from 'react';

type FirstMapType={
    students:Array<Team>

}
type Team ={
    id:number
    name:string
    age:number
}

export const FirstMap = (props:FirstMapType) => {
    return (
        <div>
            {props.students.map(el=>{
                return(
                    <ul key={el.id}>
                <li>{el.age}</li>
                <li>{el.name}</li>
                </ul>
                )}
                )}
        </div>
    );
};

;