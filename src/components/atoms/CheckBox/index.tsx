import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

interface CheckboxProps {
  label: string | JSX.Element;
  value?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Index({ label, value, onChange }: CheckboxProps) {
  return (
    <FormControlLabel
      control={<Checkbox color='success' checked={value} onChange={onChange} />}
      label={label}
    />
  );
}
