import React from 'react';
import './App.css';

import News from './components/news';
import Comments from './components/comments';
import "antd/dist/antd.css";
import TextInput from "./components/textInput";


const  myNews = [
    {
        id: 1,
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        id: 2,
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        id: 3,
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
    ,
    {
        id: 4,
        author: 'SFR',
        text: 'Самая последняя новость часа',
        bigText: 'Мэриленд может стать первым американским штатом, где запретят использовать пищевые контейнеры и стаканы из пенопласта. Соответствующий законопроект сейчас обсуждают в сенате штата'
    }
];

class App extends React.Component {
  render() {
    return (
        <div className="title">
            <p>Новости</p>
            <TextInput/>
            <News data = {myNews}/>
            <Comments/>
        </div>
    );
  }
}

export default App;
