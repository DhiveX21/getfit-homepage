import React, { Component } from "react";
import listPatient from "api/listAppointment.json";
import Table from "elements/Table";

export default class listAppointmentTable extends Component {
  render() {
    return (
      <div className="shadow p-2">
        <Table
          tableColumn={[
            { title: "No", data: "id", width: "75px" },
            { title: "Foto", data: "photo", width: "100px" },
            { title: "Nama", data: "name", width: "200px" },
            {
              title: "Tgl Appointment",
              data: "appointmentDate",
              width: "150px",
            },
            { title: "No HP", data: "phone", width: "150px" },
            { title: "Status", data: "status", width: "200px" },
          ]}
          data={listPatient.listAppointment}
          editButton={"/admin/editAppointment/~"}
          detailButton={"/admin/detailAppointment/~"}
          deleteButton={"/admin/deleteAppointment/~"}
        ></Table>
      </div>
    );
  }
}
