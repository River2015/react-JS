import React from 'react';
import './App.css';

import News from './components/news';
import Comments from './components/comments';
import "antd/dist/antd.css";
import Button from 'antd/lib/button';

const  myNews = [
    {
        id: 1,
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    },
    {
        id: 2,
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        id: 3,
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
    ,
    {
        id: 4,
        author: 'SFR',
        text: 'Самая последняя новость часа'
    }
];

class App extends React.Component {
  render() {
    return (
        <div className="title">
            <p>Новости</p>
            <News data = {myNews}/>
            <Button type="primary">Button</Button>
            <Comments/>
        </div>
    );
  }
}

export default App;
