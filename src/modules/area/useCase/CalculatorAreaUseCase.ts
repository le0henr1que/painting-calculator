import { Calculate } from '../../../utils/Calculate';
import { HttpError } from '../../../shared/error';
import { AmountInk, Area, ContentCalculateType } from '../../../types';

export class CalculatorAreaUseCase {
  //declaro as variaveis
  resultSumAllArea: number = 0;
  resultSumAllAreaWindow: number = 0;
  resultSumAllAreaDoor: number = 0;
  resultSumTotalLiquidPrint: number = 0;
  //define o contrututor da classe e recebe os parâmetros
  //utilização da class calculate responsavel pelo calculo e soma das áreas e calculo do uso de tinta
  constructor(private calculate: Calculate) {}

  async execute(contentCalculate: ContentCalculateType) {
    var resultSumAllArea = this.resultSumAllArea;
    var resultSumAllAreaWindow = this.resultSumAllAreaWindow;
    var resultSumAllAreaDoor = this.resultSumAllAreaDoor;
    var resultSumTotalLiquidPrint = this.resultSumTotalLiquidPrint;

    //Verificação de no maximo quatro lados
    if (contentCalculate.wall.measure.length > 4) {
      throw new HttpError('Adicione no maximo quatro medidas', 400);
    }

    contentCalculate.wall.measure.map((content: any, i: number) => {
      //Verificação area da parede não pode ser menor que 1 m
      if (content.width * content.height < 1) {
        throw new HttpError('A área das paredes não pode ser menor que 1', 400);
      }
      //Verificação area da parede não pode ser maior que 50 m
      if (content.width * content.height > 50) {
        throw new HttpError('A área das paredes não pode ser maior que 50', 400);
      }
      //Verificação entre altura da porta com relação a parede menor que 0,30
      for (var doorMeasure = 0; doorMeasure < contentCalculate.door.measure.length; doorMeasure++) {
        var relationDoorWall = content.height - contentCalculate.door.measure[doorMeasure].height;
        if (parseFloat(relationDoorWall.toFixed(2)) < 0.3) {
          throw new HttpError(
            'Para uma melhor aplicação, a diferença entre o tamanho da porta e parede deve ser maior que 0,30 cm',
            400,
          );
        }
      }
    });

    //Return total da area de todas as paredes
    resultSumAllArea = this.calculate.totalArea(contentCalculate.wall.measure);
    console.log('Total da área da parede: ' + resultSumAllArea);
    //total da area de todas as portas
    resultSumAllAreaDoor = this.calculate.totalArea(contentCalculate.door.measure);
    console.log('Total da área da porta: ' + resultSumAllAreaDoor);
    //total da area das janelas
    resultSumAllAreaWindow = this.calculate.totalArea(contentCalculate.window.measure);
    console.log('Total da área da Janela: ' + resultSumAllAreaWindow);
    //total de tinta considerando a area total das paredes menos a area total das janelas e portas
    resultSumTotalLiquidPrint = resultSumAllArea - (resultSumAllAreaWindow + resultSumAllAreaDoor);
    console.log('Total de tinta considerante Janela e Porta: ' + resultSumTotalLiquidPrint);

    //verificação area da porta e janela não pode ser maior que o total da area das paredes
    if (resultSumAllAreaDoor + resultSumAllAreaWindow > resultSumAllArea) {
      throw new HttpError(
        'A soma da área da janela e da porta não pode ser menor do que a soma da área das paredes.',
        400,
      );
    }

    //verificação area da janela e porta pode ser no maximo 50% da area total das paredes
    if (resultSumAllAreaDoor + resultSumAllAreaWindow > resultSumAllArea / 2) {
      throw new HttpError('O total de área das portas e janelas deve ser no máximo 50% da área de parede.', 400);
    }
    //construo o array comn as informaçõs para a class calculate responsavel por calcular o uso de tinta
    const amountInk: AmountInk = {
      literPaintPerMeter: 5,
      totalAreaDoor: resultSumAllAreaDoor,
      TotalAreaWindow: resultSumAllAreaWindow,
      totalAreaWall: resultSumAllArea,
    };

    //declaro e retorno o uso de tinta para o controller retornar para o user
    const amountInkResult = this.calculate.amountInk(amountInk);
    return amountInkResult;
  }
}
