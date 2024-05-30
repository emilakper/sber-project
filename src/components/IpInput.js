import React from 'react';
import { TextField } from '@salutejs/plasma-ui';
import { useSection } from '@salutejs/spatial';

const IpInput = React.forwardRef(({ handleIpChange, isOk, handleIpSearch, updateInputValue }, ref) => {
  const [sectionProps] = useSection('sectionName');
  return (
    <div id="ip-input" {...sectionProps}>
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
    </div>
  );
});

export default IpInput;