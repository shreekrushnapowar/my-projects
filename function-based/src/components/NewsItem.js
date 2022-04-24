import React from 'react'

const NewsItem =(props)=> {  
        let {title,description,imageUrl,NewsUrl,author,date}=props;
        return (
            <div>
              <div className="card" style={{width: "18rem"}}>
               <img src={imageUrl} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={NewsUrl} className="btn btn-sm btn-primary">Read More</a>
                  </div>
              </div>
            </div>)
}

export default NewsItem
