import React from 'react';

const PropsTwoIndex = (props) => {
    console.log(props.location.data.name);
    return (
        <div className="page-content">
            <div className="page-header">
                Learning Component Props Send
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12">
                    Hi, {props.location.data.name}, <br/>
                        {props.location.data.address}<br/>
                        {props.location.data.city}<br/>
                        {props.location.data.phone}<br/>
                </div>
            </div>
        </div>
    )
}

export default PropsTwoIndex;