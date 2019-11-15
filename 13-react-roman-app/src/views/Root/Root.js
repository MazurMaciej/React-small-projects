import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from "../../context";

import TwitterView from "./../TwitterView/TwitterView";
import ArticleView from "./../ArticleView/ArticleView";
import NotesView from "./../NotesView/NotesView";
import Header from "../../components/Header/Header";

import "./Root.css";

import Form from "../../components/Form/Form";
import List from "../../components/List/List";
import Modal from "../../components/Modal/Modal";


const initialStateItems = [
  {
    image: "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/square_480/oapgW_Fp_400x400.jpg",
    name: "Dan Abramov",
    description: "React core member",
    twitterLink: "https://twitter.com/dan_abramov"
  }
];

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
    isModalOpen: false,
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <BrowserRouter>
        <AppContext.Provider value={this.state}>
          <Header openModalFn={this.openModal}/>
          <h1>Hello world!</h1>
          <Switch>
            <Route exact path="/" component={TwitterView}/>
            <Route path="/article" component={ArticleView}/>
            <Route path="/notes" component={NotesView}/>
          </Switch>
          { isModalOpen && <Modal closeModalFn={this.closeModal}/>}
        </AppContext.Provider>      
      </BrowserRouter>
    );
  }
}

export default Root;
