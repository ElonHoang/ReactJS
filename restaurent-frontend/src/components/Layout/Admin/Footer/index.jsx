import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

AdminFooter.propTypes = {};

function AdminFooter(props) {
  return (
    <div>
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Admin Management</span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            Copyright © 2021. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default AdminFooter;
