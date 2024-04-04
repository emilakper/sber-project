import React from 'react';
import { Row, Col } from '@salutejs/plasma-ui';
import { Filler } from '../GlobalStyle';

const InfoTable = () => {
  return (
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
  );
};

export default InfoTable;