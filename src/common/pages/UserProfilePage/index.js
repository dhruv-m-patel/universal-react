import { connect } from 'react-redux';
import { fetchUser } from '../../../client/redux/actions';
import UserProfilePage from './UserProfilePage';

function mapStateToProps({ users }) {
  return {
    user: users.user?.data,
    posts: users.userPosts?.data,
    isLoading: users.user?.isFetching,
    error: users.user?.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: (id, includePosts) => dispatch(fetchUser(id, includePosts)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
