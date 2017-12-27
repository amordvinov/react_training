import React from 'react';
import { Button } from 'react-bootstrap';
import './CButton.scss';

const CButton = ({ message = 'Empty' }) => (
  <Button bsStyle="primary" bsSize="large">
    {message}
  </Button>
);

export default CButton;
