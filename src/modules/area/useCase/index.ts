import { Calculate } from '../../../../src/utils/Calculate';
import { CalculatorAreaController } from './CalculatorAreaController';
import { CalculatorAreaUseCase } from './CalculatorAreaUseCase';

const calculate = new Calculate();

const calculatorAreaUseCase = new CalculatorAreaUseCase(calculate);

const calculatorAreaController = new CalculatorAreaController(calculatorAreaUseCase);

export { calculatorAreaUseCase, calculatorAreaController };
