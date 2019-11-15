import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from './Radio';
import TwitterView from "../../views/TwitterView/TwitterView";


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
  }

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    })
  }

  render() {
    const { activeOption } = this.state;
    return(
      <div className={styles.wrapper}>
          <Title>Add new {description[this.state.activeOption]}</Title>
          <form autoComplete="off" className={styles.form} onSubmit={this.props.submitFn}>
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
            <Input
              name="name"
              label={activeOption === types.twitter ? "Twitter Name" : "Name"}
              maxLength={30}
            />
            <Input
              name="link"
              label="Twitter link"
            />
            {activeOption === types.twitter ? <Input name="image" label="Image"/> : null}
            <Input
              tag="textarea"
              name="description"
              label="Description"
            />
            <Button >add new item</Button>
          </form>
        </div>
    )
  }
};


export default Form;
