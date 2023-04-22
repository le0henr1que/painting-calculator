import { AmountInk, Area, CansNeeded, CansInk } from 'index';
('../../../types');

export class Calculate {
  sumAllArea: number = 0;

  //método responsavel por calcular o total de area de todas as paredes, janelas ou porta
  totalArea(arrayMeasure: Area[]): number {
    var sumAllArea = this.sumAllArea;
    arrayMeasure.map((content: any) => {
      sumAllArea += content.width * content.height;
    });
    return parseFloat(sumAllArea.toFixed(2));
  }
  //método de calcular o total de tinta e quantidade de litros
  async amountInk({
    literPaintPerMeter,
    totalAreaDoor,
    TotalAreaWindow,
    totalAreaWall,
  }: AmountInk): Promise<CansNeeded> {
    //área total da janela e porta
    var totalAreaDorAndWidow = totalAreaDoor + TotalAreaWindow;
    //total da area das paredes desconsiderando total de area das paredes e janelas
    var totalAreaConsideringDoorAndWindow = totalAreaWall - totalAreaDorAndWidow;

    //total de litro de tinta considerando que um litro pinta 5 metros
    var amountInkPainter = totalAreaConsideringDoorAndWindow / literPaintPerMeter;
    console.log('Litro de tinta ' + amountInkPainter);

    let valueTotal: number;
    //medidas de tinta
    var tinInk = [0.5, 2.5, 3.6, 18];
    valueTotal = Math.ceil(parseFloat(amountInkPainter.toFixed(2)));
    console.log(valueTotal);

    var result: any[] = [];
    //map responsavel por retornar a quantidade de baldes utilizados em cada
    //pintura e o quanto ainda vai faltar para finalizar
    tinInk.map((content: number, index: number) => {
      result.push({
        size: content,
        complete: Math.floor(valueTotal / content),
        missing: parseFloat((valueTotal % content).toFixed(2)),
      });
    });

    let valueTreatment: number = valueTotal;

    //array que define a quantidade de cada balde de tinta da para utilizar sem gasto
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
