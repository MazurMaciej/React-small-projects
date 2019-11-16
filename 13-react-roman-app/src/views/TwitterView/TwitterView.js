import React from 'react';
import AppContext from '../../context';
import List from './../../components/List/List'

class TwitterView extends React.Component {

    render(){
        return(
           <AppContext.Consumer>
               {(context)=> (
                   <List items={context.twitter}/>
               )}
           </AppContext.Consumer>
        )
    }
}

export default TwitterView;