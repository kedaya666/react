import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts} from '../actions/postActions'

class posts extends Component {
    /* constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    } */
    componentDidMount(){ 
        //触发action图片
        this.props.fetchPosts()
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newPosts){
            this.props.posts.unshift(nextProps.newPosts)
        }

    }
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>post</h1>
                {postItems}
            </div>
        )
    }
}

posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    posts:state.posts.items,
    newPosts:state.posts.item,

})

export default connect(mapStateToProps,{fetchPosts})(posts)
