import React from 'react';
type PropsType={
    title:string
}

export const Footer = (props:PropsType) => {
    return (
        <div>
            {props.title}
        </div>
    );
};

