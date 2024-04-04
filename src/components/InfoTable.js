import React from 'react';
import { Row, Col } from '@salutejs/plasma-ui';
import { Filler } from '../GlobalStyle';

const InfoTable = ({info, info2, info16}) => {
  return (
    <div>
      <Row>
          <Col size={2}><Filler><b>Имя</b></Filler></Col>
          <Col size={1}><Filler><b>Значение</b></Filler></Col>
          <Col size={1}><Filler><b>16-ричный вид</b></Filler></Col>
          <Col size={2}><Filler><b>Бинарный вид</b></Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Адрес</Filler></Col>
          <Col size={1}><Filler>{info.ipAdr}</Filler></Col>
          <Col size={1}><Filler>{info16.ipAdr}</Filler></Col>
          <Col size={2}><Filler>{info2.ipAdr}</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Битовая маска</Filler></Col>
          <Col size={1}><Filler>{info.maskVal}</Filler></Col>
          <Col size={1}><Filler>-</Filler></Col>
          <Col size={2}><Filler>-</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Маска сети</Filler></Col>
          <Col size={1}><Filler>{info.networkMask}</Filler></Col>
          <Col size={1}><Filler>{info16.networkMask}</Filler></Col>
          <Col size={2}><Filler>{info2.networkMask}</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Обратная маска</Filler></Col>
          <Col size={1}><Filler>{info.inverseMask}</Filler></Col>
          <Col size={1}><Filler>{info16.inverseMask}</Filler></Col>
          <Col size={2}><Filler>{info2.inverseMask}</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Адрес сети</Filler></Col>
          <Col size={1}><Filler>{info.networkAddress}</Filler></Col>
          <Col size={1}><Filler>{info16.networkAddress}</Filler></Col>
          <Col size={2}><Filler>{info2.networkAddress}</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Широковещательный адрес</Filler></Col>
          <Col size={1}><Filler>{info.broadcastAddress}</Filler></Col>
          <Col size={1}><Filler>{info16.broadcastAddress}</Filler></Col>
          <Col size={2}><Filler>{info2.broadcastAddress}</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Минимальный адрес хоста</Filler></Col>
          <Col size={1}><Filler>{info.minHost}</Filler></Col>
          <Col size={1}><Filler>{info16.minHost}</Filler></Col>
          <Col size={2}><Filler>{info2.minHost}</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Максимальный адрес хоста</Filler></Col>
          <Col size={1}><Filler>{info.maxHost}</Filler></Col>
          <Col size={1}><Filler>{info16.maxHost}</Filler></Col>
          <Col size={2}><Filler>{info2.maxHost}</Filler></Col>
        </Row>
        <Row>
          <Col size={2}><Filler>Всего хостов</Filler></Col>
          <Col size={1}><Filler>{info.numOfHosts}</Filler></Col>
          <Col size={1}><Filler>-</Filler></Col>
          <Col size={2}><Filler>-</Filler></Col>
        </Row>
      </div>
  );
};

export default InfoTable;