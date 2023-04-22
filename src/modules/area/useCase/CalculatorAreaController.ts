import { Response, Request } from 'express';
import { CalculatorAreaUseCase } from './CalculatorAreaUseCase';

export class CalculatorAreaController {
  //define o contrututor da classe e recebe os parâmetros
  constructor(private calculatorAreaUseCase: CalculatorAreaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    //retornando o valor da body para o useCAse
    const result = await this.calculatorAreaUseCase.execute(request.body);
    //se der tudo certo, retorna para o user error:false e o resultado do calculo
    return response.status(200).json({ error: false, result });
  }
}
