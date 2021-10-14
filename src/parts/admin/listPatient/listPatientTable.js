import React, { Component } from "react";
import listPatient from "api/listPatient.json";
import Table from "elements/Table";

export default class listPatientTable extends Component {
  render() {
    return (
      <div className="shadow p-2">
        <Table
          tableColumn={[
            { title: "No", data: "id", width: "75px" },
            { title: "Foto", data: "photo", width: "100px" },
            { title: "Nama", data: "name", width: "200px" },
            { title: "Jenis Kelamin", data: "gender", width: "150px" },
            { title: "No HP", data: "phone", width: "150px" },
            { title: "Alamat", data: "address", width: "150px" },
          ]}
          data={listPatient.listPatient}
          editButton={"/admin/editPatient/~"}
          deleteButton={"/admin/deletePatient/~"}
          detailButton={"/admin/detailPatient/~"}
        ></Table>
      </div>
    );
  }
}
