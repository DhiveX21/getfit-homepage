import React, { Component } from "react";
import api from "api/api.json";
import Table from "elements/Table";

export default class listServiceTable extends Component {
  render() {
    return (
      <div className="shadow p-2">
        <Table
          tableColumn={[
            { title: "No", data: "service_id", width: "75px" },
            { title: "Foto", data: "image", width: "100px" },
            { title: "Nama", data: "service_name", width: "200px" },
            { title: "Deskripsi", data: "description", width: "150px" },
            { title: "Harga", data: "price", width: "150px" },
            { title: "Diskon", data: "discount", width: "150px" },
          ]}
          data={api.services}
          editButton={"/admin/editPatient/~"}
          deleteButton={"/admin/deletePatient/~"}
          detailButton={"/admin/detailPatient/~"}
        ></Table>
      </div>
    );
  }
}
