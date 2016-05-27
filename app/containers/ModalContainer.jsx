import { connect } from 'react-redux';
import { closeModal } from '../actions';
import PictureModal from '../components/PictureModal.jsx';

const mapStateToProps = (state) => {
  console.log(state);
  if (state.modal === '') {
    return {
      picture: ''
    };
  }
  return {
    picture: state.modal.picture,
    height: state.modal.height
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseClick: () => {
      dispatch(closeModal());
    }
  };
};

const PictureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureModal);

export default PictureContainer;