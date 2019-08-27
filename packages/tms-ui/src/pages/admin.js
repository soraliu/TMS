import PropTypes from 'prop-types';
import { connect } from 'dva';
import Redirect from 'umi/redirect';

function Admin({ login }) {
  if (login) {
    return <h1>Admin Page</h1>;
  }
    return <Redirect to="/login" />;
}

Admin.propTypes = {
  login: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    login: state.global.login,
  };
}

export default connect(mapStateToProps)(Admin);
