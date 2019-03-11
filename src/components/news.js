import React, {Component} from 'react';

class News extends Component {
    render() {
        const newsList = this.props.data.map(function(item, index) {
            return (
                <div key={index}>
                    <p className="news__author">{item.author}:</p>
                    <p className="news__text">{item.text}:</p>
                </div>
            )
        })

        console.log(newsList)

        return (
            <div className="news">
                {newsList}
            </div>
        )
    }
}
 export default News;