import styled from 'styled-components';
import { TableDataProps } from '@props-types/index';
export const BackTitleButton = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--button-color);`;
export const AddressTypo = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  color: #342f29;
  font-style: italic;
`;
export const UpdateAddress = styled.a`
  font-size: 1rem;
  font-weight: 600;

  text-decoration: underline;
  font-style: italic;
  &:hover {
    cursor: pointer;
  }
`;

export const TableData = styled.td<TableDataProps>`
  border: 1px solid black;
  padding: 0.5rem;
  text-align: center;
  background-color: #fbf7f1;
`;
export const Tr = styled.tr``;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid black;
`;
export const Th = styled.th`
  border: 1px solid black;
  color: white;
  padding: 0.5rem;
`;
export const HeadTable = styled.thead`
  background-color: var(--button-color);
`;
export const BodyTable = styled.tbody`
  & > tr > td:hover {
    cursor: pointer;
    background-color: #f3d5b6;
  }
`;
