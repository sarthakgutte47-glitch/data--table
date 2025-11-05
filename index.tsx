
// pages/index.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableManager from '../components/TableManager';
import ColumnManagerModal from '../components/ColumnManagerModal';
import { addColumn, toggleColumn } from '../store/dataSlice';

const IndexPage = () => {
  const columns = useSelector((state: any) => state.data.columns);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  // Add new column handler
  function handleAddColumn(field: string, label: string) {
    dispatch(addColumn({ field, label, visible: true }));
  }

  // Toggle column visibility handler
  function handleToggleColumn(field: string) {
    dispatch(toggleColumn(field));
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>Dynamic Data Table Manager</h1>
      <button onClick={() => setModalOpen(true)} style={{ marginBottom: 16 }}>
        Manage Columns
      </button>
      <TableManager />
      <ColumnManagerModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        columns={columns}
        onAddColumn={handleAddColumn}
        onToggleColumn={handleToggleColumn}
      />
    </div>
  );
};

export default IndexPage;
