import React from 'react';
import { TextField } from '@salutejs/plasma-ui';

const IpInput = ({ handleIpChange }) => {
  return (
    <div>
      <TextField
        placeholder="Введите IP-адрес"
        helperText='Например, 192.168.0.1'
        onChange={({ target: { value } }) => handleIpChange(value)}
        required={true}
      />
    </div>
  );
};

export default IpInput;