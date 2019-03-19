import React, {Component} from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

class Form extends Component {
    state = {
        name: '',
        text: '',
        bigText: '',
        agree: false,
    }

    onBtnClickHandler = (e) => {
        e.preventDefault();
        const {name,text, bigText}=this.state;
        //alert(name +'\n' + text);
        this.props.onAddNews({
            id: +new Date(),
            author: name,
            text,
            bigText,
        })
    }

    handleNameChange  = (e) => {
        this.setState({name: e.currentTarget.value})
    }

    handleTextChange  = (e) => {
        this.setState({text: e.currentTarget.value})
    }
    handleBigTextChange = (e) => {
        this.setState({bigText: e.currentTarget.value})
    }
    handleCheckboxChange = (e) => {
        this.setState({agree: e.currentTarget.checked})
    }

    validate = () => {
        const {name, text, agree} = this.state;
        if (name.trim() && text.trim() && agree) {
            return true
        }
        return false
    }

    render() {
    const {name, text, bigText}=this.state;
        return (
            <form className="add">
                <input
                    id = 'name'
                    type="text"
                    onChange={this.handleNameChange}
                    className="add__author"
                    placeholder='ваше имя'
                    value={name}
                />
                <textarea
                    id = 'text'
                    onChange={this.handleTextChange}
                    className="add_text"
                    placeholder="текст новости"
                    value={text}
                ></textarea>
                <textarea
                    id = 'bigText'
                    onChange={this.handleBigTextChange}
                    className='add__text'
                    placeholder='текст новости подробно'
                    value={bigText}
                 >
                </textarea>
                <label className="add__checkrule">
                    <input
                        onChange={this.handleCheckboxChange}
                        type='checkbox'/>
                     я согласен с правилами
                </label>
                <Button
                    className="add_btn"
                    onClick={this.onBtnClickHandler}
                    disabled={!this.validate()}>
                    Добавить новость
                </Button>
            </form>
            )
    }

}

Form.propTypes = {
   onAddNews: PropTypes.func.isRequired,
}

export default Form;