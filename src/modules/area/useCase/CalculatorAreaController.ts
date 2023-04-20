import { Response, Request } from 'express';
import { CalculatorAreaUseCase } from './CalculatorAreaUseCase';

export class CalculatorAreaController {
  constructor(private calculatorAreaUseCase: CalculatorAreaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    console.log('Teste');
    await this.calculatorAreaUseCase.execute();
    return response.status(201).json({ error: false });
  }
}
