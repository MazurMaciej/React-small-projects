import React from 'react';

const ButtonFetchUsers = (props) => {
    return ( 
        <button style={{
            margin: '20px',
            border: 'solid black 2px',
            padding: '10px 20px',
            backgroundColor: '#fff',
        }}
        onClick={props.click}>Dodaj uzytkownika</button>
     );
}
 
export default ButtonFetchUsers;