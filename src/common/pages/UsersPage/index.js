import { connect } from 'react-redux';
import { fetchUsers } from '../../../client/redux/actions';
import UsersPage from './UsersPage';

function mapStateToProps({ users }) {
  return {
    users: users.users?.data,
    isLoading: users.users?.isFetching,
    error: users.users?.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
