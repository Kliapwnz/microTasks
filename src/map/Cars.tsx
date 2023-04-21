import React from 'react';

type TopCarsType={
    topCars:Cars[]
}
type Cars={
    manufacturer:string
    model:string
}
export const Cars = (props:TopCarsType) => {
    return (
        <div>
            {props.topCars.map((el,index)=>{
                return(
                    <table>
                        <tr>
                            <th>{index+1}</th>
                        </tr>
                        <tr>
                            <td>{el.manufacturer}</td>
                        </tr>
                        <tr>
                            <td>{el.model}</td>
                        </tr>
                    </table>
                )
            })}
        </div>
    );
};

