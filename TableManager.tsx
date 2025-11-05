
import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from '@mui/material';

const TableManager = () =>
     {
  const rows = useSelector((state: any) => state.data.rows);
  const columns = useSelector((state: any) => state.data.columns.filter((col: any) => col.visible));

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col: any) => (
              <TableCell key={col.field}>{col.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow key={row.id}>
              {columns.map((col: any) => (
                <TableCell key={col.field}>{row[col.field]}</TableCell>
              ))}
            </TableRow>
          )
        )
    }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableManager;
