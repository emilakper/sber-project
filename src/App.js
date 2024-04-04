import React, { useState, useEffect } from 'react';
import { Button } from '@salutejs/plasma-ui';
import MaskInput from './components/MaskInput';
import IpInput from './components/IpInput';
import InfoTable from './components/InfoTable';
import { createAssistant, createSmartappDebugger } from '@salutejs/client';
import './GlobalStyle';
import { calculateNetworkMask, calculateInverseMask, calculateNetworkAddress, calculateBroadcastAddress, calculateMinHost, calculateMaxHost, calculateNumOfHosts,
   decimalToBinary, decimalToHex } from './components/Calculations';



   const initializeAssistant = (getState/*: any*/) => {
    if (process.env.NODE_ENV === "development") {
      return createSmartappDebugger({
        token: process.env.REACT_APP_TOKEN ?? "",
        initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
        getState,
      });
    }
    return createAssistant({getState});
  };


const App = () => {
  const [ipValue, setIpValue] = useState("0.0.0.0");
  const [maskValue, setMaskValue] = useState(0);
  const [isOk, setIsOk] = useState(false);
  const [info, setInfo] = useState({ 
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

  const [info2, setInfo2] = useState({
    ipAdr: '-',
    networkMask: '-',
    inverseMask: '-',
    networkAddress: '-',
    broadcastAddress: '-',
    minHost: '-',
    maxHost: '-'
  });

  const [info16, setInfo16] = useState({
    ipAdr: '-',
    networkMask: '-',
    inverseMask: '-',
    networkAddress: '-',
    broadcastAddress: '-',
    minHost: '-',
    maxHost: '-'
  });

  useEffect(() => {
    const assistant = initializeAssistant(() => getStateForAssistant());
    
    assistant.on('data', (event) => {
      // Обработка входящих данных от ассистента
      // ...
    });

    // Другие обработчики событий ассистента

    return () => {
      assistant.unmount();
    };
  }, []);

  const getStateForAssistant = () => {
    // Логика для получения состояния приложения для ассистента
    // Возвращаем состояние для ассистента
  };

 // code
  function validateIP(ipAddress) {
    const ipParts = ipAddress.split('.');
    if (ipParts.length !== 4) {
      return 'error';
    }
  
    for (let part of ipParts) {
      if (!/^\d{1,3}$/.test(part) || +part < 0 || +part > 255) {
        return 'error';
      }
    }
    return 'success';
  }

  const handleMaskChange = (newValue) => {
    setMaskValue(Math.round(newValue));
  };

  const handleIpChange = (newValue) => {
    if (validateIP(newValue) === "success"){
      setIpValue(newValue);
      setIsOk(true);
    } else {
      setIsOk(false);
    }
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

    setInfo2({
      ipAdr: decimalToBinary(ipValue),
      networkMask: decimalToBinary(networkMask),
      inverseMask: decimalToBinary(inverseMask),
      networkAddress: decimalToBinary(networkAddress),
      broadcastAddress: decimalToBinary(broadcastAddress),
      minHost: decimalToBinary(minHost),
      maxHost: decimalToBinary(maxHost)
    });

    setInfo16({
      ipAdr: decimalToHex(ipValue),
      networkMask: decimalToHex(networkMask),
      inverseMask: decimalToHex(inverseMask),
      networkAddress: decimalToHex(networkAddress),
      broadcastAddress: decimalToHex(broadcastAddress),
      minHost: decimalToHex(minHost),
      maxHost: decimalToHex(maxHost)
    });
  };

  return (
    <div>
      <div>
        <IpInput handleIpChange={handleIpChange} isOk={isOk} />
        <div style={{ marginBottom: '25px' }} />
        <MaskInput maskValue={maskValue} handleMaskChange={handleMaskChange} />
        <div style={{ marginBottom: '25px' }} />
        <Button
        text = "Посчитать"
        onClick={handleCalculate}
        disabled={!isOk}
        />
      </div>
      <div style={{ marginBottom: '25px' }} />
      <InfoTable info={info} info2={info2} info16={info16} />
    </div>
  );
};

export default App;