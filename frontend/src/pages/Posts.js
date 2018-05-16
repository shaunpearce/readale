import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import Post from '../components/Post'

class Posts extends Component {

	state = {
		loaded: false,
	}

	componentDidMount() {
		this.props.getPosts()
		.then(() => {
				this.setState({
					loaded: true
				})
			})
	}

	render() {
		
		const { posts } = this.props
		const postsList = Object.values(posts).map((post, index) => {
				return(
						<Post key={index} post={post} postSummary={true}/>
				)
		})

		return(
				<div className="page-container">
						{this.state.loaded && postsList}
				</div>
		)    
	}
}

const mapStateToProps = ({ posts }) => {
		return {
			posts: posts
		}
	}
	
const mapDispatchToProps = (dispatch) => {
		return {
			getPosts: () => dispatch(fetchPosts())
		}
}
	
export default connect(mapStateToProps, mapDispatchToProps)(Posts)