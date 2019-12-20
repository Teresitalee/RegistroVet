import React from 'react';


const Header = ({titulo}) => {
    return ( 
        <header>
            <h3 className="text-center mt-4 text-white"> {titulo} </h3>
        </header>
     );
}
 
export default Header;