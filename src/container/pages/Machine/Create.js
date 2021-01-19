import React from 'react';
import FormMachine from './Form';
const CreateMachine = () => {

    return (
        <div className="page-content">
            <div className="page-header">
                Form Machine Management
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <FormMachine/>
                </div>
            </div>
        </div>
    )
}

export default CreateMachine;