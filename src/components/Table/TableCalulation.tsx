import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid black;
`;
export const Td = styled.td`
  border: 1px solid black;
  padding: 0.5rem;
`;
export const Th = styled.th`
  border: 1px solid black;
  color: white;
  padding: 0.5rem;
`;
export default function TableCalculation() {
  return (
    <Table>
      <tr>
        <Th rowSpan={2}>Phòng</Th>
        <Th rowSpan={2}>Tiền Phòng</Th>
        <Th colSpan={3}>Điện</Th>
        <Th rowSpan={2}>Thành tiền</Th>
      </tr>
      <tr>
        <Th>Số Mới</Th>
        <Th>Số Cũ</Th>
        <Th>Tiêu Thụ</Th>
      </tr>
    </Table>
  );
}
