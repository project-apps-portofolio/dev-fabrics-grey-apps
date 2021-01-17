import React, { useEffect, useState } from "react";
import ReactExport from "react-export-excel";
import ServiceFabric from '../../../services/service';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const DownloadXls = () => {

    const [fabric , setFabric] = useState([]);

    useEffect(() => {
        async function ApiFabric() {
            const res = await ServiceFabric.getAll();
            const result = res.data.data
            setFabric(result);
        }
        ApiFabric();
    })
    return (
        <ExcelFile element={<button className="btn btn-sm btn-success"><i className="fa fa-file"></i></button>}>
            <ExcelSheet data={fabric} name="Report Fabric Grey">
                <ExcelColumn label="No Unix" value="id"/>
                <ExcelColumn label="Fabirc Type" value="fabric_type"/>
                <ExcelColumn label="Machine No" value="machine_id"/>
                <ExcelColumn label="Brand" value="brand"/>
                <ExcelColumn label="Brand" value="po_number"/>
                <ExcelColumn label="Date" value="created_at"/>
                {/* <ExcelColumn label="Marital Status"
                             value={(col) => col.is_married ? "Married" : "Single"}/> */}
            </ExcelSheet>
        </ExcelFile>
    )
}

export default DownloadXls;