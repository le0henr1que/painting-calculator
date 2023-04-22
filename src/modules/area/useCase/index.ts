import { Calculate } from '../../../utils/Calculate';
import { CalculatorAreaController } from './CalculatorAreaController';
import { CalculatorAreaUseCase } from './CalculatorAreaUseCase';

//criar instância de Calculate
const calculate = new Calculate();
//criar instância de use case
const calculatorAreaUseCase = new CalculatorAreaUseCase(calculate);
//criar instância de controller
const calculatorAreaController = new CalculatorAreaController(calculatorAreaUseCase);
//exportando instâncias para route
export { calculatorAreaUseCase, calculatorAreaController };
