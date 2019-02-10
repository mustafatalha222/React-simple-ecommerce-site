import React from 'react';

const Title = (props) => {
    return (
        <div className="container" style={{fontSize:'20px',color:'blue', textAlign:'center'}}>
    <div style={{display:'inline-block'}} className="row title" ><h2><strong >{props.name}<br/>{props.title}</strong></h2></div>
        </div>
    );
};

export default Title;