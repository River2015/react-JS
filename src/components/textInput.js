import React, {Component} from 'react';

class TextInput extends Component {
    state = {
        myValue: '',
}
    onChangeHandle = (e) => {
        this.setState ({myValue: e.currentTarget.value})
    }
    render() {
        return (
            <input
                className="test-input"
                onChange={this.onChangeHandle}
                value={this.state.value}
                placeholder='введите значение'/>
            )
    }
}

export default TextInput;