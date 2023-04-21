import { Calculate } from '../../../utils/Calculate';
import { HttpError } from '../../../../src/shared/error';
import { AmountInk, Area, ContentCalculateType } from '../../../types';

export class CalculatorAreaUseCase {
  resultSumAllArea: number = 0;
  resultSumAllAreaWindow: number = 0;
  resultSumAllAreaDoor: number = 0;
  resultSumTotalLiquidPrint: number = 0;
  constructor(private calculate: Calculate) {}

  async execute(contentCalculate: ContentCalculateType) {
    console.log(contentCalculate.wall.measure.length);

    var resultSumAllArea = this.resultSumAllArea;
    var resultSumAllAreaWindow = this.resultSumAllAreaWindow;
    var resultSumAllAreaDoor = this.resultSumAllAreaDoor;
    var resultSumTotalLiquidPrint = this.resultSumTotalLiquidPrint;

    if (contentCalculate.wall.measure.length > 4) {
      throw new HttpError('Adicione no maximo quatro medidas', 400);
    }
    if (contentCalculate.wall.measure.length < 4) {
      throw new HttpError('Adicione no minimo quatro paredes', 400);
    }

    contentCalculate.wall.measure.map((content: any) => {
      if (content.width * content.height < 1) {
        throw new HttpError('A área das paredes não pode ser menor que 1', 400);
      }
      if (content.width * content.height > 50) {
        throw new HttpError('A área das paredes não pode ser maior que 50', 400);
      }
    });

    resultSumAllArea = this.calculate.TotalArea(contentCalculate.wall.measure);
    console.log('Total da área da parede: ' + resultSumAllArea);

    resultSumAllAreaDoor = this.calculate.TotalArea(contentCalculate.door.measure);
    console.log('Total da área da porta: ' + resultSumAllAreaDoor);

    resultSumAllAreaWindow = this.calculate.TotalArea(contentCalculate.window.measure);
    console.log('Total da área da Janela: ' + resultSumAllAreaWindow);

    resultSumTotalLiquidPrint = resultSumAllArea - (resultSumAllAreaWindow + resultSumAllAreaDoor);
    console.log('Total de tinta considerante Janela e Porta: ' + resultSumTotalLiquidPrint);

    if (resultSumAllAreaDoor + resultSumAllAreaWindow > resultSumAllArea) {
      throw new HttpError(
        'A soma da área da janela e da porta não pode ser menor do que a soma da área das paredes.',
        400,
      );
    }

    const amountInk: AmountInk = {
      literPaintPerMeter: 5,
      totalAreaDoor: resultSumAllAreaDoor,
      TotalAreaWindow: resultSumAllAreaWindow,
      totalAreaWall: resultSumAllArea,
    };
    const amountInkResult = this.calculate.amountInk(amountInk);

    return amountInkResult;
  }
}
