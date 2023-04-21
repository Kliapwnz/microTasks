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
                            <th>number</th>
                            <th>manufactured</th>
                            <th>model</th>
                        </tr>
                        <tr>
                            <td>{index+1}</td>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>

                    </table>
                )
            })}
        </div>
    );
};

