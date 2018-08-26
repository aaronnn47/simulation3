import React,{Component} from 'react'
import './Home.css'
import house from './house_pic.png'
import postPic from './posts_pic.png'
import logout from './logout_pic.png'

class Home extends Component{
    render(){
        console.log(this.props)
        return(
        <div>
            <nav>
                <div className="icon"></div>
                <a href="#/home"><img src={house} alt=""/></a>
                <a href="#/posts"><img src={postPic} alt=""/></a>
                <a href="/"><img src={logout} alt=""/></a>
            </nav>


        </div>

        )
    }
}

export default Home