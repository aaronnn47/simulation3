import React, {Component} from 'react'
import './Posts.css'
import house from './house_pic.png'
import logout from './logout_pic.png'
import postPic from './posts_pic.png'
import {updateTitle, updateImageUrl, updateContent} from '../../ducks/reducer'
import {connect} from 'react-redux'
import axios from 'axios'

class Posts extends Component{


    handlePost(){
        axios.post('/api/posts', {title: this.props.title, image_url: this.props.image_url, content: this.props.content})
    }

    render(){
        return(
        <div className="app">
            <nav>
                <div className="icon"></div>
                <a href="#/home"><img src={house} alt=""/></a>
                <a href="#/posts"><img src={postPic} alt=""/></a>
                <a href="/"><img src={logout} alt=""/></a>
            </nav>
            
            <main>
                <div><h1>New Post</h1></div>
                    <div className="title">
                    <p>Title:</p>
                    <input onChange={(e)=>this.props.updateTitle(e.target.value)}/>
                    </div>
                <div className="img"></div>
                    <div className="imageInput">
                    <p>Image URL:</p>
                    <input onChange={(e)=>this.props.updateImageUrl(e.target.value)}/>
                    </div>
                    <div className="content">
                    <p>Content:</p>
                    <input onChange={(e)=>this.props.updateContent(e.target.value)}/>
                    
                    </div>
                <div className="postButton">
                    <button onClick={()=>this.handlePost()}>Post</button>
                </div>
            </main>
        </div>
        )
    }
}

function mapStateToProps(state){
    return{
        title: state.title,
        image_url: state.image_url,
        content: state.content
    }
}

export default connect(mapStateToProps,{updateContent,updateImageUrl,updateTitle})(Posts)