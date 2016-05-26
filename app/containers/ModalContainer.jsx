import { connect } from 'react-redux';
import { showPicture, showModal, closeModal } from '../actions';
import PictureModal from '../components/PictureModal.jsx';

const mapStateToProps = (state) => {
  return {
    picture: state.modal
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