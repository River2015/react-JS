import React, {Component} from 'react';
import Article from './article';
import PropTypes from 'prop-types';



class News extends React.Component {
    state = {
        counter: 0,
        filteredNews: this.props.data,
    }

    handleCounter = () => {
        this.setState({ counter: this.state.counter +1 })
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log({nextProps})
    //     console.log({oldProps: this.props})
    // }

    renderNews = () => {
        let newsList = null
        //const {data} = this.props
        const {filteredNews} = this.state
        if (filteredNews.length) {
            newsList = filteredNews.map(function(item) {
                return <Article key={item.id} data={item}/>
            })
        } else {
                newsList = <p> Новостей на данный момент нет</p>
        }
        return newsList
    }

    componentWillReceiveProps(nextProps) {
        let nextFilteredNews = [...nextProps.data]
        nextFilteredNews.forEach((item, index) => {
            if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
                item.bigText = 'СПАМ'
            }
        })
        this.setState({filteredNews: nextFilteredNews})
    }
    render() {
        const {filteredNews} =this.state
        const {counter} =this.state
        return (
            <div className="news">
                {this.renderNews()}
                {/*<p className={data.length > 0 ? '' : 'none'} onClick = {this.handleCounter}>Всего новостей <span>{this.props.data.length}</span></p>*/}
                {filteredNews.length ? (<strong className='news__count' onClick = {this.handleCounter}>Всего новостей: {filteredNews.length}</strong>
                ) : null}
                <p>Кликов всего: {counter}</p>
            </div>
        );
    }
}
News.propTypes = {
        data: PropTypes.array.isRequired
}

 export default News;