import React from 'react';
import Button from './../Button/Button';
import HeaderNavigation from './HeaderNavigation';

import logoImage from './../../assets/images/logo.svg';
import styles from './Header.module.scss';

const Header = ({openModalFn}) => (
    <header className={styles.wrapper}>
        <img src={logoImage} alt="logo"/>
        <HeaderNavigation/>
        <Button secondary onClick={openModalFn}>add new Item</Button>
    </header>
)

export default Header;


