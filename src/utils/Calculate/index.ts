import { AmountInk, Area } from 'index';
('../../../types');

export class Calculate {
  sumAllArea: number = 0;

  TotalArea(arrayMeasure: Area[]): number {
    var sumAllArea = this.sumAllArea;
    arrayMeasure.map((content: any) => (sumAllArea += content.width * content.height));
    return parseFloat(sumAllArea.toFixed(2));
  }

  amountInk({ literPaintPerMeter, totalAreaDoor, TotalAreaWindow, totalAreaWall }: AmountInk): number {
    var totalAreaDorAndWidow = totalAreaDoor + TotalAreaWindow;
    var totalAreaConsideringDoorAndWindow = totalAreaWall - totalAreaDorAndWidow;
    var amountInkPainter = totalAreaConsideringDoorAndWindow / literPaintPerMeter;
    let valueTotal: number;
    // let lastIndex:number
    let otherValueInk: number;

    var tinInk = [0.5, 2.5, 3.6, 18];
    valueTotal = Math.ceil(parseFloat(amountInkPainter.toFixed(2)));
    console.log(valueTotal);

    var result: any[] = [];

    tinInk.map((content: any, index: any) => {
      if (valueTotal > content) {
        // console.log(index)
        console.log(
          `${Math.floor(valueTotal / content)} latas de ${content} Litros ${
            valueTotal % content
          } litros faltantes para completar`,
        );

        result.push({
          size: content,
          complete: Math.floor(valueTotal / content),
          missing: parseFloat((valueTotal % content).toFixed(2)),
        });

        console.log(
          '-----------------------------------------------------------------------------------------------------------',
        );
      }
    });

    console.log(result);

    const lowNumber = result.reduce((menor, obj) => {
      if (obj.complete < menor.complete) {
        return obj;
      }
    });
    console.log(lowNumber.size + ' ' + lowNumber.complete);

    let remaining: any = result.map((content: any) => {
      if (content.missing !== 0) {
        // console.log("Com o restante de " + content.missing)
        // console.log(content.missing % result[0].size)
        if (content.missing % result[0].size == 0) {
          return { complete: content.missing / result[0].size, of: result[0].size };
        }
        if (content.missing % result[1].size == 0) {
          return { complete: content.missing / result[0].size, of: result[1].size };
        }
        if (content.missing % result[2].size == 0) {
          return { complete: content.missing / result[0].size, of: result[2].size };
        }
        if (content.missing % result[2].size !== 0) {
          return { complete: 1, of: 0.5 };
        }
      }
      // console.log(remaining)

      // console.log(content.size)
      // if(lowNumber.missing % content.size == 0){
      // }
    });
    console.log(remaining);

    remaining = remaining.filter((valor: any, indice: any, array: any) => {
      return valor !== undefined;
    });
    // console.log(remaining)

    remaining = remaining.filter((obj: any, index: any, arr: any) => {
      return (
        index ===
        arr.findIndex((o: any) => {
          return o.id === obj.id && o.name === obj.name;
        })
      );
    });
    // console.log(remaining)
    // let arrUnique = [...new Set(remaining)];

    //@ts-ignore
    //está perte, verificar o retorno correto do maior complete
    remaining = remaining.reduce((menor: any, obj: any) => {
      if (obj.complete >= menor.complete || (!menor.complete && !obj.complete)) {
        return obj;
      }
    }, remaining[0]);

    // remaining = [remaining]

    console.log(remaining);

    //@ts-ignore
    console.log(
      'O indicado para uma pintura sem desperdicio é ' +
        lowNumber.complete +
        ' latas de ' +
        lowNumber.size +
        ' e ' +
        remaining.complete +
        ' de ' +
        remaining.of,
    );

    return Math.ceil(parseFloat(amountInkPainter.toFixed(2)));
  }
}
