
import Papa from 'papaparse';
import { saveAs } from 'file-saver';

export function importCSV(file: File, callback: (rows: any[]) => void) {
  Papa.parse(file, {
    header: true,
    complete: (res: any) => callback(res.data),
  });
}

export function exportCSV(data: any[], columns: any[]) {
  const visibleFields = columns.filter((c: any) => c.visible).map((c: any) => c.field);
  const csvData = data.map(row => {
    const obj: any = {};
    visibleFields.forEach(field => obj[field] = row[field]);
    return obj;
  });
  const csv = Papa.unparse(csvData);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, 'export.csv');
}
