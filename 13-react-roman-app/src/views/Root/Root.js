import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from "../../context";

import TwitterView from "./../TwitterView/TwitterView";
import ArticleView from "./../ArticleView/ArticleView";
import NotesView from "./../NotesView/NotesView";
import Header from "../../components/Header/Header";

import "./Root.css";

import Modal from "../../components/Modal/Modal";


class Root extends React.Component {
  state = {
    twitter: [],
    article: [],
    notes: [],
    isModalOpen: false,
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState(prevState=>({
      [newItem.activeOption]: [...prevState[newItem.activeOption], newItem],
      }))

    this.closeModal();
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
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    }
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
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
