import React from 'react';
import { TextField } from '@salutejs/plasma-ui';

const IpInput = React.forwardRef(({ handleIpChange, isOk, handleIpSearch, updateInputValue }, ref) => {
  return (
      <TextField
        size='l'
        placeholder="Введите IP-адрес:"
        onChange={({ target: { value } }) => {
          handleIpChange(value); 
          handleIpSearch(value); 
        }}
        status={isOk ? 'success' : 'error'}
        helperText='Например, 192.168.0.1'
        required={true}
        ref={ref}
      />
  );
});

export default IpInput;