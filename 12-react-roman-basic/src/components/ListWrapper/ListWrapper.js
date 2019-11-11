import React from 'react';
import ListItem from './ListItem/ListItem';

import './ListWrapper.css'
import { twitterAccounts } from '../../data/twitterAccounts';

const listItem = twitterAccounts.map(item=> (
    <ListItem key={item.name}{...item}/>
))

const ListWrapper = () => (
        <ul className="listWrapper__wrapper">
            {listItem}
        </ul>
    );
    
export default ListWrapper;
