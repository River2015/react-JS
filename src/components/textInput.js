import React, {Component} from 'react';
import { Button } from 'antd';

class TextInput extends Component {
    state = {
        myValue: '',
}
    onChangeHandle = (e) => {
        this.setState ({myValue: e.currentTarget.value})
    }
    onBtnClickHandler = (e) => {
        alert(this.state.myValue);
    }
    render() {
        return (
            <div>
                <p>контролируемый</p>
                <input
                    className="test-input"
                    onChange={this.onChangeHandle}
                    value={this.state.myValue}
                    placeholder='введите значение'
                />
                <Button onClick={this.onBtnClickHandler}> Показать alert</Button>
            </div>
            )
    }
}

export default TextInput;