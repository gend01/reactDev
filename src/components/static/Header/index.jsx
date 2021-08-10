import React from "react";
import Menu from "../../modules/MenuNav"
import menuLinks from './menu.json'


function Header({ router }) {

  return (

    <header>
        <Menu links={menuLinks}/>
    </header>

  );

}

export default Header;