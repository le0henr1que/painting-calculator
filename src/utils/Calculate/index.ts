import { AmountInk, Area, CansNeeded, CansInk } from 'index';
('../../../types');

export class Calculate {
  sumAllArea: number = 0;

  TotalArea(arrayMeasure: Area[]): number {
    var sumAllArea = this.sumAllArea;
    arrayMeasure.map((content: any) => (sumAllArea += content.width * content.height));
    return parseFloat(sumAllArea.toFixed(2));
  }

  async amountInk({
    literPaintPerMeter,
    totalAreaDoor,
    TotalAreaWindow,
    totalAreaWall,
  }: AmountInk): Promise<CansNeeded> {
    var totalAreaDorAndWidow = totalAreaDoor + TotalAreaWindow;
    var totalAreaConsideringDoorAndWindow = totalAreaWall - totalAreaDorAndWidow;
    var amountInkPainter = totalAreaConsideringDoorAndWindow / literPaintPerMeter;
    let valueTotal: number;

    var tinInk = [0.5, 2.5, 3.6, 18];
    valueTotal = Math.ceil(parseFloat(amountInkPainter.toFixed(2)));
    console.log(valueTotal);

    var result: any[] = [];

    tinInk.map((content: number, index: number) => {
      result.push({
        size: content,
        complete: Math.floor(valueTotal / content),
        missing: parseFloat((valueTotal % content).toFixed(2)),
      });
    });

    let valueTreatment: number = valueTotal;

    let cansNeeded: CansNeeded = { '18': 0, '3.6': 0, '2.5': 0, '0.5': 0, AreaTotal: valueTotal };

    cansNeeded['18'] = Math.floor(valueTreatment / 18);
    valueTreatment = valueTreatment % 18;

    cansNeeded['3.6'] = Math.floor(valueTreatment / 3.5);
    valueTreatment = valueTreatment % 3.5;

    cansNeeded['2.5'] = Math.floor(valueTreatment / 2.5);
    valueTreatment = valueTreatment % 2.5;

    cansNeeded['0.5'] = Math.floor(valueTreatment / 0.5);
    valueTreatment = valueTreatment % 0.5;

    return cansNeeded;
  }
}
