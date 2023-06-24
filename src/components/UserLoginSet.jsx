import { useState, useCallback } from 'react';
import dayjs from 'dayjs';

function UserLoginSet( {userid} ) {
  // const [userid, setUserid] = useState("");

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          {/* <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info"> */}
            <img src="/static/img/avatar/avatar7.png" alt="avatar" />
          {/* </a> */}
          <div className="chat-about">
            <h6 className="m-b-0">{ userid }</h6>
            <small>Last : {dayjs().format("h:mm A")}</small>
          </div>
        </div>
        <div className="col-lg-6 hidden-sm text-right">
          <button className="btn btn-outline-warning"><i className="fa fa-power-off"></i></button>

        </div>
      </div>
    </>
  );
}
export default UserLoginSet;