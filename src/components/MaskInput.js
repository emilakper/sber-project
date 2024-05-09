import React from 'react';
import { Slider, TextBox } from '@salutejs/plasma-ui';


const MaskInput = ({ handleMaskChange, maskValue }) => {
    return (
      <div>
        <TextBox
            subTitle='Выберите маску(0-32):'
            style={{ width: '100%' }}
        />
        <Slider 
            value={maskValue}
            onChangeCommitted={handleMaskChange}
            min={0} 
            max={32}  
            disabled={false} 
        />
        <TextBox
            subTitle={'Выбрано значение:' + maskValue.toString()}
        />
        <div style={{ marginBottom: '25px' }} />
      </div>
    );
  };

export default MaskInput;
