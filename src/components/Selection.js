import React from 'react';
import './Selection.css';


const Selection=({id,title,image,route})=>{
    return(
        <div className='product'>
            <div className='product_info'>
                <b>{title}</b>
            </div>
            <img src={image} alt=""/>
            <a href=''>shop now</a>
        </div>        
    );
}
export default Selection;