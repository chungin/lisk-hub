import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { activePeerSet } from '../../actions/peers';
import Register from './register';

const mapDispatchToProps = dispatch => ({
  activePeerSet: data => dispatch(activePeerSet(data)),
});

const mapStateToProps = state => ({
  account: state.account,
  network: state.settings.network || 0,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate()(Register));
