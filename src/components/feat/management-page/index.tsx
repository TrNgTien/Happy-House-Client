import React, { useState } from 'react';
import { Table, BodyTable } from 'src/styles/CalculationStyles';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import { TABLE_DATA } from '@constants/mock-data';
import { IRow } from '@props-types/index';
import { Pagination, Stack } from '@mui/material';

export default function TableCalculation() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = TABLE_DATA.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <Stack spacing={2}>
      <Table>
        <TableHeader />
        <BodyTable>
          {TABLE_DATA &&
            currentRows.map((detailRoom: IRow) => (
              <TableRow key={detailRoom.id} detailRow={detailRoom} />
            ))}
        </BodyTable>
      </Table>
      {TABLE_DATA.length / 10 > 1 && (
        <Stack style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <Pagination
            count={Math.floor(TABLE_DATA.length / 10) + 1}
            onChange={(event, page) => setCurrentPage(page)}
          />
        </Stack>
      )}
    </Stack>
  );
}
