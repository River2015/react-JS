import React from 'react';
//import './App.css';

import News from './components/news';
import Comments from './components/comments';

const  my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];

class App extends React.Component {
  render() {
    return (
        <div className="title">
            <p>Новости</p>
            <News data = {my_news}/>
            <Comments />
        </div>
    );
  }
}

export default App;
