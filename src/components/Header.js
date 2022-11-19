import React, {useEffect, useState} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

const Header = () =>{
    const [style, setStyle] = useState({})

    const checkScroll = () =>{
        if(window.scrollY > 60){
            setStyle({"backgroundColor":"black"})
        }else{
            setStyle({})
        }
   }

   useEffect(()=>{
        window.addEventListener('scroll', checkScroll)

        // clean up function
        return () =>{   
            window.removeEventListener('scroll', checkScroll)
        }
   },[])


    return(
        <div className="header" style={style}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Clone" 
            className="header-img" />
            <div className="nav-bar">
                <NavLink to="/" exact activeClassName="selected">Home</NavLink>
                <NavLink to="/trending" activeClassName="selected">Trending</NavLink>
                <NavLink to="upcoming" activeClassName="selected">Upcoming</NavLink>
                <NavLink to="webseries" activeClassName="selected">Web Series</NavLink>
            </div>
        </div>
    );
};

export default Header;