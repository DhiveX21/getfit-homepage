import React, { Component } from "react";
import listOrder from "api/listOrder.json";
import Table from "elements/Table";

export default class listOrderTable extends Component {
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
          data={listOrder.listOrder}
          editButton={"/admin/editPatient/~"}
          deleteButton={"/admin/deletePatient/~"}
          detailButton={"/admin/detailPatient/~"}
        ></Table>
      </div>
    );
  }
}
