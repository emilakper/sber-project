import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { text, background, gradient } from '@salutejs/plasma-tokens';
import { TextField, Slider, Button, Row, Col, TextBox} from '@salutejs/plasma-ui';

const DocStyles = createGlobalStyle`
  html {
    color: ${text};
    background-color: ${background};
    background-image: ${gradient};
    min-height: 100vh;
  }
`;

const Filler = styled.div`
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0.5rem 1rem;
        background-color: rgba(255,255,255,0.06);
    `;

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
      <DocStyles />
      <div>
        <TextField
          placeholder="Введите IP-адрес"
          helperText='Например, 192.168.0.1'

          onChange = {({ target: { value } }) => handleIpChange(value)}
          required = {true}
        />
        <div style={{ marginBottom: '25px' }} />
        <TextBox
          subTitle='Выберите маску:'
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
        <Button
        text = "Подсчитать"
        onClick={calculateIpInfo}
        />
      </div>
      <div style={{ marginBottom: '25px' }} />
      <div>
      <Row>
          <Col size={2}><Filler><b>Имя</b></Filler></Col>
          <Col size={1}><Filler><b>Значение</b></Filler></Col>
          <Col size={1}><Filler><b>16-ричный вид</b></Filler></Col>
          <Col size={1}><Filler><b>Бинарный вид</b></Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Адрес</Filler></Col>
          <Col size={1}><Filler>6</Filler></Col>
          <Col size={1}><Filler>7</Filler></Col>
          <Col size={1}><Filler>8</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Маска</Filler></Col>
          <Col size={1}><Filler>10</Filler></Col>
          <Col size={1}><Filler>11</Filler></Col>
          <Col size={1}><Filler>12</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Маска сети</Filler></Col>
          <Col size={1}><Filler>14</Filler></Col>
          <Col size={1}><Filler>15</Filler></Col>
          <Col size={1}><Filler>16</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Обратная маска</Filler></Col>
          <Col size={1}><Filler>18</Filler></Col>
          <Col size={1}><Filler>19</Filler></Col>
          <Col size={1}><Filler>20</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Адрес сети</Filler></Col>
          <Col size={1}><Filler>22</Filler></Col>
          <Col size={1}><Filler>23</Filler></Col>
          <Col size={1}><Filler>24</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Широковещательный адрес</Filler></Col>
          <Col size={1}><Filler>26</Filler></Col>
          <Col size={1}><Filler>27</Filler></Col>
          <Col size={1}><Filler>28</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Минимальный адрес хоста</Filler></Col>
          <Col size={1}><Filler>30</Filler></Col>
          <Col size={1}><Filler>31</Filler></Col>
          <Col size={1}><Filler>32</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Максимальный адрес хоста</Filler></Col>
          <Col size={1}><Filler>34</Filler></Col>
          <Col size={1}><Filler>35</Filler></Col>
          <Col size={1}><Filler>36</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Всего хостов</Filler></Col>
          <Col size={1}><Filler>38</Filler></Col>
          <Col size={1}><Filler>39</Filler></Col>
          <Col size={1}><Filler>40</Filler></Col>
        </Row>
      </div>
    </div>
  );
};

export default App;