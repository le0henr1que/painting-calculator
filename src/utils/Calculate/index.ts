import { AmountInk, Area, CansNeeded, CansInk } from 'index';
('../../../types');

export class Calculate {
  sumAllArea: number = 0;

  TotalArea(arrayMeasure: Area[]): number {
    var sumAllArea = this.sumAllArea;
    arrayMeasure.map((content: any) => {
      sumAllArea += content.width * content.height;
    });
    return parseFloat(sumAllArea.toFixed(2));
  }

  async amountInk({
    literPaintPerMeter,
    totalAreaDoor,
    TotalAreaWindow,
    totalAreaWall,
  }: AmountInk): Promise<CansNeeded> {
    var totalAreaDorAndWidow = totalAreaDoor + TotalAreaWindow;

    // console.log("Area total da janela "+totalAreaDorAndWidow)
    var totalAreaConsideringDoorAndWindow = totalAreaWall - totalAreaDorAndWidow;
    // console.log("Area total desconsiderando porta e janela "+totalAreaConsideringDoorAndWindow)

    var amountInkPainter = totalAreaConsideringDoorAndWindow / literPaintPerMeter;
    console.log('Litro de tinta ' + amountInkPainter);

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

    let cansNeeded: CansNeeded = {
      dezoito: 0,
      tresVirgulaSeis: 0,
      doisVirgulaCinco: 0,
      zeroVirgulaCinco: 0,
      AreaTotal: valueTotal,
      totalInk: parseFloat(amountInkPainter.toFixed(2)),
    };

    cansNeeded['dezoito'] = Math.floor(valueTreatment / 18);
    valueTreatment = valueTreatment % 18;

    cansNeeded['tresVirgulaSeis'] = Math.floor(valueTreatment / 3.5);
    valueTreatment = valueTreatment % 3.5;

    cansNeeded['doisVirgulaCinco'] = Math.floor(valueTreatment / 2.5);
    valueTreatment = valueTreatment % 2.5;

    cansNeeded['zeroVirgulaCinco'] = Math.floor(valueTreatment / 0.5);
    valueTreatment = valueTreatment % 0.5;
    console.log(cansNeeded);
    return cansNeeded;
  }
}
