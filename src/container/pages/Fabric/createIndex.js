import React, { useState } from 'react';
import ServiceFabric from '../.././../services/service';

const CreateIndex = () => {
    const initialize = {
        id: null,
        fabric_type: "",
        machine_id: "",
        brand: "",
        po_number: "",
    }

    const [fabric, setFabric] = useState(initialize);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFabric({ ...fabric, [name]: value })
    }

    const saveFabric = () => {
        var data = {
            fabric_type: fabric.fabric_type,
            machine_id: fabric.machine_id,
            brand: fabric.brand,
            po_number: fabric.po_number
        };

        ServiceFabric.create(data).then(res => {
            setFabric({
                id: res.data.id,
                fabric_type: res.data.fabric_type,
                machine_id: res.data.machine_id,
                brand: res.data.brand,
                po_number: res.data.po_number
            });

            setSubmitted(true);
            console.log(console.data);
        })
            .catch(e => {
                console.log(e);
            });
    };

    const newFabric = () => {
        setFabric(initialize);
        setSubmitted(false);
      };

      return (
          <div className="submit-form">
              {submitted ? (
                  <div>
                      <h6>Submit</h6>
                  </div>
              ): (
                  <div><h6>title</h6></div>
              )}
          </div>
      )
}


export default CreateIndex;