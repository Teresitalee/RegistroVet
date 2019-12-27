import React from 'react';
import propTypes from 'prop-types';


const Header = ({titulo}) => {
    return ( 
        <header>
            <h3 className="text-center mt-4 text-white"> {titulo} </h3>
        </header>
     );
}

//documentando codigo
Header.propTypes = {
    titulo : propTypes.string.isRequired
}


 
export default Header;