import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spin from "./Spin";
//import Spinner from './Spinner';
import PropTypes from "prop-types";

const News =(props)=> {
 const [articles, setarticles] = useState()
 const [loading, setloading] = useState(true)
const [Page, setPage] = useState(1)
const [totalresult, settotalresult] = useState(0)
 

useEffect(() => {
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7c3463321a6f4b00bb9cfccc277c5249`;
  this.setState({ loading: true });
  let data = await fetch(url);
  let parsedData = await data.json();
  // setState({ articles: parsedData.articles, loading: false });
 
  setloading(false)
  setarticles(parsedData.articles)
}, [])


  handlenext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=7c3463321a6f4b00bb9cfccc277c5249&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
     setPage(page + 1)
     setarticles(parsedData.articles)
     setloading(false)
     settotalresult(0)
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
      totalresult:0
    });
  };
  const handleprev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=7c3463321a6f4b00bb9cfccc277c5249&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
    return (
      <div className="container my-3">
        <h1 className="textcentere">Top Headlines</h1>

        {/* {this.state.loading && <Spin />} */}
       
        <div className="row">
          
          {/* {!this.state.loading && this.state.articles.map((element)=>{ */}
          {this.state.articles.map((element) => {
            return (
              <div className="col md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  NewsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
      
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handleprev}
          >
            &larr;Prev
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlenext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
}
News.defaultProps = {
  country: "in",
};
News.propTypes = {
  country: PropTypes.string,
};
export default News;
