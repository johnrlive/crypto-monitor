import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { save } from '../actions';

const SaveButton = ({ updatedCurrencyData, editState, onSave }) =>
  (editState === 'READ' ? null : (
    <button
      onClick={() => onSave(updatedCurrencyData.map(currency => parseFloat(currency.amount)))}
      className="button is-inverted is-outlined is-dark is-small"
    >
      Save
    </button>
  ));

SaveButton.propTypes = {
  editState: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  updatedCurrencyData: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  editState: state.toggleEdit,
});

export default connect(mapStateToProps, { onSave: save })(SaveButton);