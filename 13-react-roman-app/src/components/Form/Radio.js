import React from 'react';

const Radio = (
    {nameItem , radioButtonChangeFn, checkedInfo , children }) => {
    return(
        <div>
            <label 
                htmlFor={nameItem}
            >
            <input 
                id= {nameItem}
                type="radio" 
                name={nameItem} 
                onChange={()=> radioButtonChangeFn(nameItem)}
                checked = {checkedInfo === nameItem}
            />
                {children}
            </label>
        </div>
    )
}

export default Radio;