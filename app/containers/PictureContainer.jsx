import { connect } from 'react-redux';
import { showPicture, showModal } from '../actions';
import PictureList from '../components/PictureList.jsx';

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPictClick: (arg) => {
      dispatch(showModal(arg));
    }
  };
};

const PictureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureList);

export default PictureContainer;