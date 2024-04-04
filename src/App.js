import React, { useState } from 'react';
import { Button } from '@salutejs/plasma-ui';
import MaskInput from './components/MaskInput';
import IpInput from './components/IpInput';
import InfoTable from './components/InfoTable';
import './GlobalStyle';
import { calculateNetworkMask, calculateInverseMask, calculateNetworkAddress, calculateBroadcastAddress, calculateMinHost, calculateMaxHost, calculateNumOfHosts } from './components/Calculations';


const App = () => {
  const [ipValue, setIpValue] = useState("0.0.0.0");
  const [maskValue, setMaskValue] = useState(0);
  const [info, setInfo] = useState({ // Инициализируем info пустыми значениями
    ipAdr: '-',
    maskVal: '-',
    networkMask: '-',
    inverseMask: '-',
    networkAddress: '-',
    broadcastAddress: '-',
    minHost: '-',
    maxHost: '-',
    numOfHosts: '-'
  });

  const handleMaskChange = (newValue) => {
    setMaskValue(Math.round(newValue));
  };

  const handleIpChange = (newValue) => {
    setIpValue(newValue);
  };

  const handleCalculate = () => {
    const networkMask = calculateNetworkMask(maskValue);
    const inverseMask = calculateInverseMask(maskValue);
    const networkAddress = calculateNetworkAddress(ipValue, maskValue);
    const broadcastAddress = calculateBroadcastAddress(ipValue, maskValue);
    const minHost = calculateMinHost(ipValue, maskValue);
    const maxHost = calculateMaxHost(ipValue, maskValue);
    const numOfHosts = calculateNumOfHosts(maskValue);

    setInfo({
      ipAdr: ipValue,
      maskVal: maskValue,
      networkMask,
      inverseMask,
      networkAddress,
      broadcastAddress,
      minHost,
      maxHost,
      numOfHosts
    });
  };

  const calculateIpInfo = () => {
    console.log("Calculated!");
    console.log(ipValue.split('.').reduce((acc, val) => (acc << 8) + parseInt(val), 0));
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
        onClick={handleCalculate}
        />
      </div>
      <div style={{ marginBottom: '25px' }} />
      <InfoTable info={info} />
    </div>
  );
};

export default App;