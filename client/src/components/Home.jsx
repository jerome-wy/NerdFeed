import React from 'react'

const Home = (props) => {

    //use useEffect
    //create a var for render posts/render comments

const posts = props.posts
const comments = props.comments
    // console.log('This is from the posts variable: ', posts)
    // console.log('This is from the comments variable: ', comments)
    console.log(posts)


    return (
        <div className="postsContainer">

            <div className="newPost">
                 <img src={posts[0].post_image} className="newImagePost" />
                Posted by: {posts[0].post_name}
                {posts[0].post_content}
                                 

            </div>

        </div>
    )
}

export default Home