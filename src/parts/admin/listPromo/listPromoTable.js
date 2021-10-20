import React, { Component } from "react";
import api from "api/api.json";
import Table from "elements/Table";

export default class listPromoTable extends Component {
  render() {
    return (
      <div className="shadow p-2">
        <Table
          tableColumn={[
            { title: "No", data: "promo_id", width: "75px" },
            { title: "Promo Image", data: "image", width: "100px" },
            { title: "Nama Promo", data: "promo_name", width: "300px" },
            { title: "Diskon / %", data: "discount", width: "150px" },
            { title: "Deskripsi", data: "description", width: "250px" },
          ]}
          data={api.promo}
          editButton={"/admin/editPatient/~"}
          deleteButton={"/admin/deletePatient/~"}
          detailButton={"/admin/detailPatient/~"}
        ></Table>
      </div>
    );
  }
}
