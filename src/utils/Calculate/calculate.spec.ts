import { describe, expect, it, test } from 'vitest';
import { Calculate } from './index';
import { AmountInk, Area } from '../../types';

describe('Calculate all areas of walls, windows or door', () => {
  it('Should return the area of all walls, windows or door', async () => {
    const calculate = new Calculate();

    const wallWindowOrDorrArea: any = [
      {
        height: 5.0,
        width: 6.0,
      },
      {
        height: 2.0,
        width: 2.0,
      },
      {
        height: 2.0,
        width: 2.0,
      },
      {
        height: 2.0,
        width: 2.0,
      },
    ];

    let sumTotalArea: number = 0;

    await wallWindowOrDorrArea.map((content: any) => {
      sumTotalArea += content.width * content.height;
    });

    const result = calculate.totalArea(wallWindowOrDorrArea);

    expect(result).toEqual(sumTotalArea);
  });
});

describe('Calculate paint usage in a certain square area', () => {
  it('should return ink usage, total area, and usage for each ink measure', async () => {
    const calculate = new Calculate();

    const amountInk: AmountInk = {
      literPaintPerMeter: 5,
      totalAreaDoor: 1,
      TotalAreaWindow: 1,
      totalAreaWall: 15,
    };

    const expectResult = {
      dezoito: 0,
      tresVirgulaSeis: 0,
      doisVirgulaCinco: 1,
      zeroVirgulaCinco: 1,
      AreaTotal: 3,
      totalInk: 2.6,
    };

    const result = await calculate.amountInk(amountInk);

    expect(result).toEqual(expectResult);
  });
});
