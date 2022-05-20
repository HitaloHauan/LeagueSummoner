import React from "react";
import Logo from '../assets/riot_simbol.png';

const Navbar = () => {

    return (

        <React.Fragment>
            <div className="flex flex-row items-center justify-center" style={{boxShadow: '0 0 6px rgb(0 0 0 / 20%)', height: 100, background: '#bb242f', }}>
                <img src={Logo} style={{ height: 70}} alt="logo"/>
            </div>
        </React.Fragment>
    
    )

}

export default Navbar;