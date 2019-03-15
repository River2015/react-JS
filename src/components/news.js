import React, {Component} from 'react';
import Article from './article';

class News extends Component {
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
                <p className={data.length > 0 ? '' : 'none'}>Всего новостей {this.props.data.length}</p>
            </div>
        );
    }
}
 export default News;