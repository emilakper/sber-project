import React, { useState, useEffect, useRef } from 'react';
import { Button, bodyL } from '@salutejs/plasma-ui';
import MaskInput from './components/MaskInput';
import IpInput from './components/IpInput';
import InfoTable from './components/InfoTable';
import { createAssistant, createSmartappDebugger } from '@salutejs/client';
import './GlobalStyle';
import { calculateNetworkMask, calculateInverseMask, calculateNetworkAddress, calculateBroadcastAddress, calculateMinHost, calculateMaxHost, calculateNumOfHosts,
   decimalToBinary, decimalToHex } from './components/Calculations';
import "./voiceSber.css";

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
  const [assistantCalc, setAssistantCalc] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          event.preventDefault();
          handleMaskChange(maskValue - 1);
          break;
        case 'ArrowRight':
          event.preventDefault();
          handleMaskChange(maskValue + 1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          // window.scrollTo(0, window.scrollY + 50);
          break;
        case 'ArrowUp':
          event.preventDefault();
          // window.scrollTo(0, window.scrollY - 50);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Удаляем обработчик при размонтировании компонента
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [maskValue]); // [maskValue] - массив зависимостей

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
    if (assistantCalc) {
      handleCalculate(); // Вызов handleCalculate когда приходит соотвествующая команда от ассистента
      setAssistantCalc(false);
    }
  }, [assistantCalc]);

  const dispatchAssistantAction = (action) => {
    console.log('dispatchAssistantAction', action);
    
    if (action) {
      switch (action.type) {
        case 'add_ip':
          handleIpSearch(action.ip);
          break;

        case 'add_mask':
          handleMaskChange(action.mask);
          break;

        case 'calc_ip':
          setAssistantCalc(true);
          break;

        default:
          throw new Error;
      }
    }
  };

  useEffect(() => {
    const assistant = initializeAssistant(() => getStateForAssistant());
    
    assistant.on('data', (event) => {
      console.log(`assistant.on(data)`, event);
      if (event.type === "character") {
        console.log(`assistant.on(data): character: "${event?.character?.id}"`);
      } else if (event.type === "insets") {
        console.log(`assistant.on(data): insets`);
      } else {
        const action = event?.action;
        dispatchAssistantAction(action);
      }
    });
    
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
    let newMaskValue = Math.round(newValue);
    if (newMaskValue < 0) {
        newMaskValue = 0;
    } else if (newMaskValue > 32) {
        newMaskValue = 32;
    }
    setMaskValue(newMaskValue);
};

  const handleIpChange = (newValue) => {
    if (validateIP(newValue) === "success"){
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  };

  const handleIpSearch = (newValue) => {
    if (validateIP(newValue) === "success"){
      setIpValue(newValue);
      setIsOk(true);
      updateInputValue(newValue);
    } else {
      setIsOk(false);
    }
  };

  const handleCalculate = () => {
    console.log("Я считаю со значениями " + ipValue + maskValue);
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

  const inputRef = useRef(null);
  const updateInputValue = (newValue) => {
    if (inputRef.current) {
      inputRef.current.value = newValue; 
    }
  };

  return (
    <div>
      <div>
        <IpInput handleIpChange={handleIpChange} isOk={isOk} newValue={ipValue} ref={inputRef} updateInputValue={updateInputValue} 
        handleIpSearch={handleIpSearch}/>
        <div style={{ marginBottom: '15px' }} />
        <div style={bodyL}><MaskInput maskValue={maskValue} handleMaskChange={handleMaskChange}/> </div>
        <div style={{ marginBottom: '15px' }} />
        <div className="myText">Введенный адрес: {ipValue}/{maskValue}</div>
        <div style={{ marginBottom: '15px' }} />
        <Button
        text = "Посчитать"
        onClick={handleCalculate}
        disabled={!isOk}
        />
      </div>
      <div style={{ marginBottom: '15px' }} />
      <InfoTable info={info} info2={info2} info16={info16} />
    </div>
  );
  
};

export default App;