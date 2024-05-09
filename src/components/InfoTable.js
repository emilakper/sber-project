import React from 'react';
import { Row, Col } from '@salutejs/plasma-ui';
import { Filler } from '../GlobalStyle';
import {ScrollableGrid, TableGrid} from '../GlobalStyle';

const InfoTable = ({info, info2, info16}) => {
  return (
    <div>
        <ScrollableGrid>
          <TableGrid>
            <table>
              <thead>
                <tr>
                  <th><Filler>Имя</Filler></th>
                  <th><Filler>10-ричный вид</Filler></th>
                  <th><Filler>16-ричный вид</Filler></th>
                  <th><Filler>Бинарный вид</Filler></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Filler><b>Адрес</b></Filler></td>
                  <td><Filler>{info.ipAdr}</Filler></td>
                  <td><Filler>{info16.ipAdr}</Filler></td>
                  <td><Filler>{info2.ipAdr}</Filler></td>
                </tr>
                <tr>
                  <td><Filler><b>Битовая маска</b></Filler></td>
                  <td><Filler>{info.maskVal}</Filler></td>
                  <td><Filler>-</Filler></td>
                  <td><Filler>-</Filler></td>
                </tr>
                <tr>
                  <td><Filler><b>Маска сети</b></Filler></td>
                  <td><Filler>{info.networkMask}</Filler></td>
                  <td><Filler>{info16.networkMask}</Filler></td>
                  <td><Filler>{info2.networkMask}</Filler></td>
                </tr>
                <tr>
                  <td><Filler><b>Обратная маска</b></Filler></td>
                  <td><Filler>{info.inverseMask}</Filler></td>
                  <td><Filler>{info16.inverseMask}</Filler></td>
                  <td><Filler>{info2.inverseMask}</Filler></td>
                </tr>
                <tr>
                  <td><Filler><b>Адрес сети</b></Filler></td>
                  <td><Filler>{info.networkAddress}</Filler></td>
                  <td><Filler>{info16.networkAddress}</Filler></td>
                  <td><Filler>{info2.networkAddress}</Filler></td>
                </tr>
                <tr>
                  <td><Filler><b>Широковещательный адрес</b></Filler></td>
                  <td><Filler>{info.broadcastAddress}</Filler></td>
                  <td><Filler>{info16.broadcastAddress}</Filler></td>
                  <td><Filler>{info2.broadcastAddress}</Filler></td>
                </tr>
                <tr>
                  <td><Filler><b>Минимальный адрес хоста</b></Filler></td>
                  <td><Filler>{info.minHost}</Filler></td>
                  <td><Filler>{info16.minHost}</Filler></td>
                  <td><Filler>{info2.minHost}</Filler></td>
                </tr>
                <tr>
                  <td><Filler><b>Максимальный адрес хоста</b></Filler></td>
                  <td><Filler>{info.maxHost}</Filler></td>
                  <td><Filler>{info16.maxHost}</Filler></td>
                  <td><Filler>{info2.maxHost}</Filler></td>
                </tr>
                <tr>
                  <td><Filler><b>Всего хостов</b></Filler></td>
                  <td><Filler>{info.numOfHosts}</Filler></td>
                  <td><Filler>-</Filler></td>
                  <td><Filler>-</Filler></td>
                </tr>
              </tbody>
            </table>
          </TableGrid>
        </ScrollableGrid>
      </div>
  );
};

export default InfoTable;