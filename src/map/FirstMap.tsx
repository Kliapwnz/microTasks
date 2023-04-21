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
                    <div>
                <div>{el.age}</div>
                <span>{el.name}</span>
                </div>
                )}
                )}
        </div>
    );
};

;