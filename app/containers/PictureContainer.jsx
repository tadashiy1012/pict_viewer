import { connect } from 'react-redux';
import { showModal } from '../actions';
import PictureList from '../components/PictureList.jsx';

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPictClick: (picture, size) => {
      console.log(size);
      dispatch(showModal(picture, size));
    }
  };
};

const PictureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureList);

export default PictureContainer;