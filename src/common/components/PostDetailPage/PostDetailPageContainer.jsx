import { connect } from 'react-redux';
import { fetchPost, fetchComments } from '../../../client/redux/actions';
import PostDetailPage from './PostDetailPage';

function mapStateToProps({ posts }) {
  return {
    post: posts.post.data,
    isFetchingPost: posts.post.isFetching,
    postError: posts.post.error,
    comments: posts.comments.data,
    isFetchingComments: posts.comments.isFetching,
    commentsError: posts.comments.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPost: (id) => dispatch(fetchPost(id)),
    fetchComments: (postId) => dispatch(fetchComments(postId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailPage);
