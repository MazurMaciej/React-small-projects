import React from 'react';
import './index.css';
import ListWrapper from '../src/components/ListWrapper/ListWrapper';
import Form from '../src/components/Form/Form';

const initialStateItems = [
  {
      image: 'https://cdn.vox-cdn.com/thumbor/g28tlGVrg-_tR0_MemAxZpoaPDc=/0x0:475x317/1200x800/filters:focal(0x0:475x317)/cdn.vox-cdn.com/uploads/chorus_image/image/49917797/zordon-power-rangers-movie.0.0.jpg',
      name: 'Dan Abramov',
      description: 'Working on @reactjs. The demo guy.',
      twitterLink: 'https://twitter.com/dan_abramov',
  },
  {
    image: 'https://cdn.vox-cdn.com/thumbor/g28tlGVrg-_tR0_MemAxZpoaPDc=/0x0:475x317/1200x800/filters:focal(0x0:475x317)/cdn.vox-cdn.com/uploads/chorus_image/image/49917797/zordon-power-rangers-movie.0.0.jpg',
      name: 'Ryan Florence',
      description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
      twitterLink: 'https://twitter.com/ryanflorence',
  },
  {
    image: 'https://cdn.vox-cdn.com/thumbor/g28tlGVrg-_tR0_MemAxZpoaPDc=/0x0:475x317/1200x800/filters:focal(0x0:475x317)/cdn.vox-cdn.com/uploads/chorus_image/image/49917797/zordon-power-rangers-movie.0.0.jpg',
      name: 'Michael Jackson',
      description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
      twitterLink: 'https://twitter.com/mjackson',
  },
  {
    image: 'https://cdn.vox-cdn.com/thumbor/g28tlGVrg-_tR0_MemAxZpoaPDc=/0x0:475x317/1200x800/filters:focal(0x0:475x317)/cdn.vox-cdn.com/uploads/chorus_image/image/49917797/zordon-power-rangers-movie.0.0.jpg',
      name: 'Kent C. Dodds',
      description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
      twitterLink: 'https://twitter.com/kentcdodds',
  },
]

class App extends React.Component {
  state = {
    items: [...initialStateItems],
  }

  addItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    }

    this.setState(prevState => ({
      items: [newItem, ...prevState.items],
    }));

    e.target.reset();
  }

  render() {
    return(
      <div className="app">
        <ListWrapper items={this.state.items}/>
        <Form addItem={this.addItem}/>
      </div>
    )
  }
}

export default App;
