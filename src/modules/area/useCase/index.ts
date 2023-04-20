import { CalculatorAreaController } from './CalculatorAreaController';
import { CalculatorAreaUseCase } from './CalculatorAreaUseCase';

const calculatorAreaUseCase = new CalculatorAreaUseCase();

const calculatorAreaController = new CalculatorAreaController(calculatorAreaUseCase);

export { calculatorAreaUseCase, calculatorAreaController };
