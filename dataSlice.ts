
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface RowData {
  id: number;
  name: string;
  email: string;
  age: number;
  role: string;
  department?: string;
  location?: string;
}
interface ColumnDef {
  field: string;
  label: string;
  visible: boolean;
}
interface DataState {
  rows: RowData[];
  columns: ColumnDef[];
}
const initialState: DataState = {
  rows: [],
  columns: [
    { field: 'name', label: 'Name', visible: true },
    { field: 'email', label: 'Email', visible: true },
    { field: 'age', label: 'Age', visible: true },
    { field: 'role', label: 'Role', visible: true },
  ],
};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setRows(state, action: PayloadAction<RowData[]>) {
      state.rows = action.payload;
    },
    addColumn(state, action: PayloadAction<ColumnDef>) {
      state.columns.push(action.payload);
    },
    toggleColumn(state, action: PayloadAction<string>) {
      state.columns = state.columns.map(col =>
        col.field === action.payload ? { ...col, visible: !col.visible } : col
      );
    },
  },
});

export default dataSlice.reducer;
export const { setRows, addColumn, toggleColumn } = dataSlice.actions;
