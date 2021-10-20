import React, { Component } from "react";
import api from "api/api.json";
import Table from "elements/Table";

export default class listTeamTable extends Component {
  render() {
    return (
      <div className="shadow p-2">
        <Table
          tableColumn={[
            { title: "No", data: "id", width: "75px" },
            { title: "Nama", data: "name", width: "250px" },
            { title: "Posisi", data: "position", width: "150px" },
            { title: "Photo", data: "photo", width: "150px" },
            { title: "Deskripsi", data: "description", width: "200px" },
            { title: "URL biodata", data: "url", width: "150px" },
          ]}
          data={api.team}
          editButton={"/admin/editPatient/~"}
          deleteButton={"/admin/deletePatient/~"}
          detailButton={"/admin/detailPatient/~"}
        ></Table>
      </div>
    );
  }
}
