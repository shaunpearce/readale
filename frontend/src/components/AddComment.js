import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import CommentForm from '../components/CommentForm'
import { addNewCommentAction } from '../actions'

class AddComment extends Component {

  submit = values => {
    const newComment = {
      id: uuidv1(),
      timestamp: new Date(),
      body: values.body,
      author: values.author,
      parentId: this.props.parentId
    } 
    this.props.addComment(newComment)
  }

  render () {

    return (
      <div>
          <CommentForm form={"add"} onSubmit={this.submit} />
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addComment: (comment) => dispatch(addNewCommentAction(comment, ownProps.parentId)),
  }
}

export default connect(null, mapDispatchToProps)(AddComment)