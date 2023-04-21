import React from 'react';

type FirstMapType = {
    students: Array<Team>

}
type Team = {
    id: number
    name: string
    age: number
}

export const FirstMap = (props: FirstMapType) => {
    return (
        <div>
            {props.students.map((el, index) => {
                    return (
                        <ul key={el.id}>
                            <li>{index + 1}</li>
                            <li>{el.name}</li>
                            <li>age: {el.age}</li>
                        </ul>
                    )
                }
            )}
        </div>
    );
};

;