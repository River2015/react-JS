import React from 'react';
import './App.css';

import News from './components/news';
import Comments from './components/comments';
import "antd/dist/antd.css";
import TextInput from "./components/textInput";
import TextInputAuto from "./components/textInputAuto";
import Form from "./components/form";
// import newsData from './data/newsData';


class App extends React.Component {
    state = {
        news : null,
        isLoading: false,
    }
    handleAddNews = (data) => {
        //console.log('я вызвана из Add, но имею доступ к this.state у App!'. this.state)
        const nextNews = [data, ...this.state.news]
        this.setState({news: nextNews})
    }

    componentDidMount() {
        fetch('http://localhost:3000/data/newsData.json')
            .then(response => {return response.json()})
            .then(data => {
                setTimeout(() => { // добавили задержку
                    this.setState({ isLoading: false, news: data })
                }, 3000) // в три секунды
            })
    }

    render(){
        const {news, isLoading} = this.state;
    return (
        <div className="title">
            <div className="block-input">
                <TextInput/>
                <TextInputAuto/>
            </div>
            <Form onAddNews={this.handleAddNews}/>
            <p>Новости</p>
            {isLoading && <p>анрузаю...</p>}
            {Array.isArray(news) && <News data={news}/>}
            <Comments/>
        </div>
    )
  }
}

export default App;
