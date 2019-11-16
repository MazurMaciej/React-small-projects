import React from "react";
import styles from "./Form.module.scss";

import AppContext from '../../context';
import Input from "../Input/Input";
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from './Radio';


const types = {
  twitter: "twitter",
  article: "article",
  notes: "notes",
}

const description = {
  twitter: "twitter account",
  article: "article",
  notes: "notes", 
}


class Form extends React.Component {
  state = {
    activeOption: types.twitter,
    title: "",
    link: "",
    image: "",
    description: "",
  }

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    })
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })


  };

  render() {
    const { activeOption } = this.state;
    return(
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
          <Title>Add new {description[this.state.activeOption]}</Title>
          <form autoComplete="off" className={styles.form} onSubmit={(e) => context.addItem(e, this.state)}>
          <div className={styles.radioBox}>
            <Radio 
              nameItem={types.twitter} 
              radioButtonChangeFn={this.handleRadioButtonChange}
              checkedInfo = {this.state.activeOption}
            >
              Twitter
            </Radio>
            <Radio 
              nameItem={types.article} 
              radioButtonChangeFn={this.handleRadioButtonChange}
              checkedInfo = {this.state.activeOption}
            >
              Article
            </Radio>
            <Radio 
              nameItem={types.notes} 
              radioButtonChangeFn={this.handleRadioButtonChange}
              checkedInfo = {this.state.activeOption}
            >
              Notes
            </Radio>
          </div>
            <Input onChange={this.handleInputChange}
              value={this.state.title}
              name="title"
              label={activeOption === types.twitter ? "Twitter Name" : "title"}
              maxLength={30}
            />
            <Input onChange={this.handleInputChange}
              value={this.state.link}
              name="link"
              label="Twitter link"
            />
            {activeOption === types.twitter ? <Input value={this.state.twitter}onChange={this.handleInputChange} 
            name="image" label="Image"/> : null}
            <Input onChange={this.handleInputChange}
              tag="textarea"
              value={this.state.description}
              name="description"
              label="Description"
            />
            <Button >add new item</Button>
          </form>
        </div>
        )}
      </AppContext.Consumer>
    )
  }
};


export default Form;
