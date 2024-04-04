import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { text, background, gradient } from '@salutejs/plasma-tokens';
import { Button } from '@salutejs/plasma-ui';
import MaskInput from './components/MaskInput';
import IpInput from './components/IpInput';
import InfoTable from './components/InfoTable';
import './GlobalStyle';


const App = () => {
  const [ipValue, setIpValue] = useState(0);
  const [maskValue, setMaskValue] = useState(0);

  const handleMaskChange = (newValue) => {
    setMaskValue(Math.round(newValue));
    console.log(newValue);
  };

  const handleIpChange = (newValue) => {
    setIpValue(newValue);
    console.log(newValue);
  };

  const calculateIpInfo = () => {
    // Ваша логика для расчета информации по IP адресу
    // Пример: const ipInfo = calculate(ipAddress, subnetMask);
    // Вернуть результат расчетов
    // return ipInfo;
    console.log("Calculated!");
    console.log(ipValue);
    console.log(maskValue);
  };

  return (
    <div>
      <div>
        <IpInput handleIpChange={handleIpChange} />
        <div style={{ marginBottom: '25px' }} />
        <MaskInput maskValue={maskValue} handleMaskChange={handleMaskChange} />
        <div style={{ marginBottom: '25px' }} />
        <Button
        text = "Подсчитать"
        onClick={calculateIpInfo}
        />
      </div>
      <div style={{ marginBottom: '25px' }} />
      <InfoTable />
    </div>
  );
};

export default App;