
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  List,
  ListItem,
} from '@mui/material';

const ColumnManagerModal = ({
  open,
  onClose,
  columns,
  onAddColumn,
  onToggleColumn,
}: {
  open: boolean;
  onClose: () => void;
  columns: { field: string; label: string; visible: boolean }[];
  onAddColumn: (field: string, label: string) => void;
  onToggleColumn: (field: string) => void;
}) => {
  const [newField, setNewField] = useState('');
  const [newLabel, setNewLabel] = useState('');

  function handleAddColumn() {
    if (newField && newLabel) {
      onAddColumn(newField, newLabel);
      setNewField('');
      setNewLabel('');
    }
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Manage Columns</DialogTitle>
      <DialogContent>
        <List>
          {columns.map(col => (
            <ListItem key={col.field}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={col.visible}
                    onChange={() => onToggleColumn(col.field)}
                  />
                }
                label={col.label}
              />
            </ListItem>
          ))}
        </List>
        <hr style={{ margin: '16px 0' }} />
        <div>
          <TextField
            label="Column Field"
            value={newField}
            onChange={e => setNewField(e.target.value)}
            size="small"
            style={{ marginRight: 8 }}
          />
          <TextField
            label="Column Name"
            value={newLabel}
            onChange={e => setNewLabel(e.target.value)}
            size="small"
            style={{ marginRight: 8 }}
          />
          <Button variant="contained" onClick={handleAddColumn}>Add</Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ColumnManagerModal;
