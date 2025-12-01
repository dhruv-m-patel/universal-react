import { connect } from 'react-redux';
import { fetchPosts } from '../../../client/redux/actions';
import PostsPage from './PostsPage';

function mapStateToProps({ posts }) {
  return {
    posts: posts.posts.data,
    isFetching: posts.posts.isFetching,
    error: posts.posts.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: (page, limit) => dispatch(fetchPosts(page, limit)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
