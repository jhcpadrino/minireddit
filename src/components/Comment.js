import React from "react";
import '../components/css/comments.css';



const Comment = (props) =>{


    const { comment } = props;
    return (
      <div className="comment">
        <div className="comment-metadata">
          <p className="comment-author">{comment.author}</p>
          <p className="comment-created-time">
          {new Date(comment.created_utc*1000).toGMTString()}
          </p>
        </div>
        {comment.body}
      </div>
    );



}

export default Comment;