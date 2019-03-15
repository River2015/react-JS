import React, {Component} from 'react';
import Article from './article';



class News extends Component {
    state = {
        counter: 0,
    }
    handleCounter = () => {
        this.setState({ counter: ++this.state.counter})
    }
    render() {
        const data = this.props.data;
        let newsList;
        if (data.length) {
            newsList = this.props.data.map(function(item) {
                return (
                        <Article key={item.id} data={item} />
                )
            })
        }
        else {
            newsList = <p> Новостей на данный момент нет</p>
        }
        return (
            <div className="news">
                {newsList}
                <p className={data.length > 0 ? '' : 'none'} onClick = {this.handleCounter}>Всего новостей <span>{this.props.data.length}</span></p>
                <p>Кликов всего: {this.state.counter}</p>
            </div>
        );
    }
}
 export default News;