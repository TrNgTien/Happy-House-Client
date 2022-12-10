import React from 'react';
import { Tr, Th, HeadTable } from 'src/styles/CalculationStyles';

const TableHeader = () => {
  return (
    <HeadTable>
      <Tr>
        <Th rowSpan={2}>Phòng</Th>
        <Th rowSpan={2}>Tiền Phòng</Th>
        <Th colSpan={3}>Điện</Th>
        <Th rowSpan={2}>Thành tiền</Th>
        <Th colSpan={3}>Nước</Th>
        <Th rowSpan={2}>Thành tiền</Th>
        <Th rowSpan={2}>Tiền Internet</Th>
        <Th rowSpan={2}>Tiền dịch vụ</Th>
        <Th rowSpan={2}>Tổng tiền</Th>
      </Tr>
      <Tr>
        <Th>Số Cũ</Th>
        <Th>Số Mới</Th>
        <Th>Tiêu Thụ</Th>
        <Th>Số Cũ</Th>
        <Th>Số Mới</Th>
        <Th>Tiêu Thụ</Th>
      </Tr>
    </HeadTable>
  );
};

export default TableHeader;
