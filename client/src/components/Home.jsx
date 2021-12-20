import React from 'react'

const Home = (props) => {

    //use useEffect
    //create a var for render posts/render comments

const posts = props.posts
const comments = props.comments
    // console.log('This is from the posts variable: ', posts)
    // console.log('This is from the comments variable: ', comments)
    console.log(comments[0])

    return (
        <div className="postsContainer">

            <div className="newPost">
        
        Comment: {comments[0]}
   

            </div>

        </div>
    )
}

export default Home