import React, { useState } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import Button from "elements/Button";
import DataTable from "react-data-table-component";

// props detail ------------------------------------------

// tableColumn = [
//   {HeaderTitle : related data from api}
// ]

// data = [
//   {
//     id: 1,
//     name: "patient1",
//     gender: "Perempuan",
//     foto: "/images/patient.jpg",
//     "no hp": "0895619258715",
//   }
// ];

// props detail ------------------------------------------

export default function Table(props) {
  //mapping key nya biar jadi header table
  const columnProps = props.tableColumn.map((item, index) => ({
    name: item.title,
    width: item.width,
    sortable: true,
    selector: (row) => row[item.data],
  }));

  const dataProps = props.data;

  if (props.detailButton !== undefined) {
    columnProps.push({
      name: "Detail",
      width: "75px",
      allowOverflow: true,
      button: true,
      selector: (row) => row["detailButton"],
    });

    dataProps.map(
      (item, index) =>
        (dataProps[index].detailButton = (
          <Button
            className="bg-blue py-2 h-full text-white  rounded shadow px-4  hover:-translate-y-1 transform transition ease-in-out duration-200"
            href={
              props.detailButton === undefined
                ? "/unknowUrl"
                : props.detailButton.replace("~", item.id)
            }
            type="link"
          >
            Detail
          </Button>
        ))
    );
  }

  if (props.editButton !== undefined) {
    columnProps.push({
      name: "Edit",
      width: "75px",
      allowOverflow: true,
      center: true,
      button: true,
      selector: (row) => row["editButton"],
    });

    dataProps.map(
      (item, index) =>
        (dataProps[index].editButton = (
          <Button
            className="bg-yellow py-2 h-full text-gray-700 rounded shadow px-4  hover:-translate-y-1 transform transition ease-in-out duration-200"
            href={
              props.editButton === undefined
                ? "/unknowUrl"
                : props.editButton.replace("~", item.id)
            }
            type="link"
          >
            Edit
          </Button>
        ))
    );
  }

  if (props.deleteButton !== undefined) {
    columnProps.push({
      name: "Delete",
      width: "75px",
      allowOverflow: true,
      button: true,
      selector: (row) => row["deleteButton"],
    });

    dataProps.map(
      (item, index) =>
        (dataProps[index].deleteButton = (
          <Button
            className="bg-pink py-2 h-full text-white  rounded shadow px-4  hover:-translate-y-1 transform transition ease-in-out duration-200"
            href={
              props.deleteButton === undefined
                ? "/unknowUrl"
                : props.deleteButton.replace("~", item.id)
            }
            type="link"
          >
            Delete
          </Button>
        ))
    );
  }

  function Table() {
    return <DataTable columns={columnProps} data={dataProps} pagination />;
  }
  return <div>{Table()}</div>;
}

Table.propTypes = {
  tableColumn: propTypes.array.isRequired,
  tableContent: propTypes.array.isRequired,
};
