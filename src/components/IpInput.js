import React from 'react';
import { TextField } from '@salutejs/plasma-ui';

const IpInput = ({ handleIpChange, isOk, handleIpSearch }) => {
  return (
    <div>
      <TextField
        placeholder="Введите IP-адрес"
        onChange={({ target: { value } }) => handleIpChange(value)}
        status={isOk ? 'success' : 'error'}
        helperText='Например, 192.168.0.1'
        onSearch={(value, event) => handleIpSearch(value)}
        required={true}
      />
    </div>
  );
};

export default IpInput;