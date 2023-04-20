import { Response, Request } from 'express';
import { CalculatorAreaUseCase } from './CalculatorAreaUseCase';

export class CalculatorAreaController {
  constructor(private calculatorAreaUseCase: CalculatorAreaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const result = await this.calculatorAreaUseCase.execute(request.body);
    return response.status(201).json({ error: false, result });
  }
}
