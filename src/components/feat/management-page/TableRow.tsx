import React, { useState } from 'react';
import { TableData, Tr } from 'src/styles/CalculationStyles';
import { _numberWithCommas } from '@utils/FormatHelper';
import index from '../../common/index';

interface IWaterMoney {
  rowId: number;
  waterMoney: number;
}
interface IElectricMoney {
  rowId: number;
  electricMoney: number;
}

const TableRow = ({ detailRow }: any) => {
  const [electricMoney, setElectricMoney] = useState<number>(0);
  const [waterMoney, setWaterMoney] = useState<number>(0);
  const [cellData, setCellData] = useState<any>({
    roomName: detailRow.roomName,
    roomCharge: detailRow.roomCharge,
    electricity: {
      current: detailRow.electricity.currentNumber,
      previous: detailRow.electricity.previousNumber,
    },
    water: {
      current: detailRow.water.currentNumber,
      previous: detailRow.water.previousNumber,
    },

    internet: {
      isUsed: detailRow.internet.isUsed,
      price: detailRow.internet.price,
    },
    services: {
      isUsed: detailRow.services.isUsed,
      price: detailRow.services.price,
    },
  });
  const { roomName, roomCharge, electricity, water, internet, services } =
    cellData;

  function calDiff(prev: number, curr: number): number {
    const resultDiff = curr - prev;
    return resultDiff;
  }
  function calTotal(typeTotal: string): number {
    if (typeTotal === 'moneyElectric') {
      const resultDiff = calDiff(electricity.previous, electricity.current);
      const resultTotal = resultDiff * 3000;
      return resultTotal;
    } else {
      const resultDiff = calDiff(water.previous, water.current);
      const resultTotal = resultDiff * 3000;
      return resultTotal;
    }
  }
  function calTotalRoomCharge(): number {
    const resultTotalRoomCharge =
      roomCharge + electricMoney + waterMoney + internet.price + services.price;
    return resultTotalRoomCharge;
  }
  return (
    <Tr>
      <TableData
        aria-label="roomName"
        onClick={(e: any) => console.log(e.target.getAttribute('aria-label'))}
        value={roomName}
      >
        {roomName}
      </TableData>
      <TableData
        aria-label="roomCharge"
        onClick={(e: any) => console.log(e.target.getAttribute('aria-label'))}
        value={_numberWithCommas(roomCharge)}
      >
        {_numberWithCommas(roomCharge)}
      </TableData>
      <TableData
        aria-label="prevElectric"
        onClick={(e: any) => console.log(e.target.getAttribute('aria-label'))}
        value={electricity.previous}
      >
        {electricity.previous}
      </TableData>
      <TableData
        aria-label="currElectric"
        onClick={(e: any) => console.log(e.target.getAttribute('aria-label'))}
        value={electricity.current}
      >
        {electricity.current}
      </TableData>
      <TableData
        aria-label="diffElectric"
        onClick={(e: any) => console.log(e.target.getAttribute('aria-label'))}
        value={calDiff(electricity.previous, electricity.current)}
      >
        {calDiff(electricity.previous, electricity.current)}
      </TableData>
      <TableData
        aria-label="moneyElectric"
        onClick={(e: any) => console.log(e.target.getAttribute('aria-label'))}
        value={calTotal('moneyElectric')}
      >
        {_numberWithCommas(calTotal('moneyElectric'))}
      </TableData>
      <TableData
        aria-label="prevWater"
        onClick={(e: any) => console.log(e.target.getAttribute('aria-label'))}
        value={water.previous}
      >
        {water.previous}
      </TableData>
      <TableData
        aria-label="currWater"
        onClick={(e: any) => console.log(e.target.getAttribute('aria-label'))}
        value={water.current}
      >
        {water.current}
      </TableData>
      <TableData
        aria-label="diffWater"
        onClick={(e: any) => console.log(e.target.getAttribute('aria-label'))}
        value={calDiff(water.previous, water.current)}
      >
        {calDiff(water.previous, water.current)}
      </TableData>
      <TableData
        aria-label="moneyWater"
        onClick={(e: any) => console.log(e.target.getAttribute('aria-label'))}
        value={calTotal('moneyWater')}
      >
        {_numberWithCommas(calTotal('moneyWater'))}
      </TableData>
      <TableData
        aria-label="internet"
        onClick={(e: any) => console.log(e.target.getAttribute('aria-label'))}
        value={internet.isUsed ? internet.price : 0}
      >
        {internet.isUsed && _numberWithCommas(internet.price)}
      </TableData>
      <TableData
        aria-label="services"
        onClick={(e: any) => console.log(e.target.getAttribute('aria-label'))}
        value={services.price}
      >
        {_numberWithCommas(services.price)}
      </TableData>
      <TableData
        aria-label="totalRoomCharge"
        onClick={(e: any) => console.log(e.target.getAttribute('aria-label'))}
        value={calTotalRoomCharge()}
      >
        {_numberWithCommas(calTotalRoomCharge())}
      </TableData>
    </Tr>
  );
};

export default TableRow;
