import { createSlice } from "@reduxjs/toolkit";


const showPostSlice = createSlice ({
   name: "showPost",
   initialState:[
    {id:1, title:'first task', completed:false},
    {id:2, title:'second task', completed:false},
    {id:3, title:'third task', completed:false}
    
    
   ],
//reducers change the state 
   reducers:{
    addPost: (state,action) => {
        const newPost = {
            id: Date.now(),
            title: action.payload.title,
            completed: false

        };
        state.push(newPost);
    },

   },

});

export const { addPost } = showPostSlice.actions;

export default showPostSlice.reducer;


// This is a Redux Thunk that gets posts from a subreddit.
