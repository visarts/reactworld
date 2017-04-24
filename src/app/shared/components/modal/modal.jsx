import React from 'react';
import Button from 'app/shared/components/button/button'

export default function Modal (props) {

  return (
    <div className="modal fade" id="rwModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h1 id="exampleModalLabel">Modal Header</h1>
          </div>
          <div className="modal-body">
            Modal Body content
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <Button>Save changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
