import React, {Component} from 'react';
import { Button } from 'antd';

class TextInputAuto extends Component {
    constructor(props) {
        super(props)
        this.input=React.createRef();
    }
    componentDidMount() {
        this.input.current.focus()
    }
    onBtnClickHandler = () => {
        alert(this.input.current.value);
    }
    render() {
        return (
            <div>
                <p>неконтролируемый</p>
                <input
                    className="test-input"
                    defaultValue=''
                    placeholder='введите значение'
                    ref={this.input}
                    />
                <Button onClick={this.onBtnClickHandler}> Показать alert</Button>
            </div>
            )
    }
}

export default TextInputAuto;