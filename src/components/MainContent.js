import React from "react";
import './css/main_content.css';
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import Article from './Article';

import {
    fetchPosts,
    selectFilteredPosts,
    setSearchTerm,
    fetchComments,
  } from '../app/redditSlice';

const  MainContent = () =>{


    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit]);

  const onToggleComments = (index) => {
    const getComments = (permalink) => {
      dispatch(fetchComments(index, permalink));
    };

    return getComments;
  };

 

  


   // const posts = useSelector((state) => state.showPost); 
   // console.log(posts);
    return(<>
             <div className="main_content">
         
                {
                   
                   posts.map((post, index) => {
                    return <>

                    <Article
                      key={post.id}
                      post={post}
                      onToggleComments={onToggleComments(index)}
                    />
                    </>
                  
                   })
                }
            
            </div>
    
    
    
    
         </>);

}


export default MainContent;