import React from "react";
import Header from "parts/admin/Header";
import Sidebar from "parts/admin/Sidebar";
import Title from "parts/admin/widget/Title";
import ListOrderTable from "parts/admin/listOrder/listOrderTable";

export default function ListOrder(props) {
  return (
    <>
      <Header className="z-20"></Header>
      <div className="relative ml-16 mr-2 mt-16 z-0 md:ml-68 md:mr-4 md:mt-18">
        <Title title="List Order"></Title>
        <ListOrderTable></ListOrderTable>
      </div>
      <Sidebar></Sidebar>
    </>
  );
}
