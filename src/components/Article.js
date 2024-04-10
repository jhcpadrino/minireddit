import React, { useState } from "react";
import '../components/css/main_content.css';
import Comment from "./Comment";


const Article = (props) => {
    const { post, onToggleComments } = props;

    const renderComments = () => {
        if (post.errorComments) {
          return (
            <div>
              <h3>Error loading comments</h3>
            </div>
          );
        }
    
        if (post.loadingComments) {
          return (
            <div>
            
            </div>
          );
        }
    
        if (post.showingComments) {
          return (
            <div>
              {post.comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}
            </div>
          );
        }
    
        return null;
      };
    
    return<>
         <div className="main-container">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
             <div className="container-post-image">
              <img src={post.url} alt="" className="post-image" />
            </div>
            <div className="options">
                <h4>Posted by: {post.author}</h4>
                <h5>{new Date(post.created_utc*1000).toGMTString()}</h5>
                <button className="btn" onClick={() => onToggleComments(post.permalink)}> show comments: {post.num_comments}</button>
            </div>
            {renderComments()}
            
            

          </div>
    
         </>


}


export default Article;