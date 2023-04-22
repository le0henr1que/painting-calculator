import { describe, expect, it, test } from 'vitest';
import { CalculatorAreaUseCase } from './CalculatorAreaUseCase';
import { Calculate } from '../../../utils/Calculate/index';
import { AmountInk, Area, ContentCalculateType } from '../../../types/index';

describe('Calculate the use of paint with the footage of the area ignoring the door and window', () => {
  it('Should return the area of all walls, windows or door', async () => {
    const calculate = new Calculate();
    const calculateAreaUseCase = new CalculatorAreaUseCase(calculate);

    const ResultCalculate: ContentCalculateType = {
      wall: {
        measure: [
          {
            height: 5.0,
            width: 6.0,
          },
          {
            height: 2.0,
            width: 2.0,
          },
          {
            height: 2.0,
            width: 2.0,
          },
          {
            height: 2.0,
            width: 2.0,
          },
        ],
      },

      door: {
        measure: [
          {
            height: 0.8,
            width: 1.9,
          },
        ],
      },

      window: {
        measure: [
          {
            height: 2.0,
            width: 2.0,
          },
        ],
      },
    };

    const result = await calculateAreaUseCase.execute(ResultCalculate);

    var expectResultCalculate = {
      dezoito: 0,
      tresVirgulaSeis: 2,
      doisVirgulaCinco: 0,
      zeroVirgulaCinco: 2,
      AreaTotal: 8,
      totalInk: 7.3,
    };

    expect(result).toEqual(expectResultCalculate);
  });

  it('Should throw an error when more than four measures are added', async () => {
    const calculate = new Calculate();
    const calculateAreaUseCase = new CalculatorAreaUseCase(calculate);

    const ResultCalculate: ContentCalculateType = {
      wall: {
        measure: [
          {
            height: 5.0,
            width: 6.0,
          },
          {
            height: 2.0,
            width: 2.0,
          },
          {
            height: 2.0,
            width: 2.0,
          },
          {
            height: 2.0,
            width: 2.0,
          },
          {
            height: 2.0,
            width: 2.0,
          },
        ],
      },

      door: {
        measure: [
          {
            height: 0.8,
            width: 1.9,
          },
        ],
      },

      window: {
        measure: [
          {
            height: 2.0,
            width: 2.0,
          },
        ],
      },
    };

    try {
      await calculateAreaUseCase.execute(ResultCalculate);
    } catch (error) {
      expect(error.message).toEqual('Adicione no maximo quatro medidas');
      expect(error.statusCode).toEqual(400);
    }
  });

  it('Should throw an error when total area of window and door is less than total area of wall', async () => {
    const calculate = new Calculate();
    const calculateAreaUseCase = new CalculatorAreaUseCase(calculate);

    const ResultCalculate: ContentCalculateType = {
      wall: {
        measure: [
          {
            height: 2.0,
            width: 2.0,
          },
          {
            height: 2.0,
            width: 2.0,
          },
          {
            height: 2.0,
            width: 2.0,
          },
          {
            height: 2.0,
            width: 2.0,
          },
        ],
      },

      door: {
        measure: [
          {
            height: 0.8,
            width: 1.9,
          },
        ],
      },

      window: {
        measure: [
          {
            height: 10.0,
            width: 10.0,
          },
        ],
      },
    };

    try {
      await calculateAreaUseCase.execute(ResultCalculate);
    } catch (error) {
      console.log(error.message);
      expect(error.message).toEqual(
        'A soma da área da janela e da porta não pode ser menor do que a soma da área das paredes.',
      );
      expect(error.statusCode).toEqual(400);
    }
  });
  it('should throw an error if the total area of the wall is less than one meter', async () => {
    const calculate = new Calculate();
    const calculateAreaUseCase = new CalculatorAreaUseCase(calculate);

    const ResultCalculate: ContentCalculateType = {
      wall: {
        measure: [
          {
            height: 0,
            width: 1.0,
          },
          {
            height: 1.0,
            width: 1.0,
          },
          {
            height: 1.0,
            width: 1.0,
          },
          {
            height: 1.0,
            width: 1.0,
          },
        ],
      },

      door: {
        measure: [
          {
            height: 1.0,
            width: 1.0,
          },
        ],
      },

      window: {
        measure: [
          {
            height: 10.0,
            width: 10.0,
          },
        ],
      },
    };

    try {
      await calculateAreaUseCase.execute(ResultCalculate);
    } catch (error) {
      console.log(error);
      expect(error.message).toEqual('A área das paredes não pode ser menor que 1');
      expect(error.statusCode).toEqual(400);
    }
  });

  it('should throw an error if the total area of the wall is greater than 50 meters', async () => {
    const calculate = new Calculate();
    const calculateAreaUseCase = new CalculatorAreaUseCase(calculate);

    const ResultCalculate: ContentCalculateType = {
      wall: {
        measure: [
          {
            height: 10.0,
            width: 10.0,
          },
          {
            height: 10.0,
            width: 10.0,
          },
          {
            height: 10.0,
            width: 10.0,
          },
          {
            height: 10.0,
            width: 10.0,
          },
        ],
      },

      door: {
        measure: [
          {
            height: 1.0,
            width: 1.0,
          },
        ],
      },

      window: {
        measure: [
          {
            height: 10.0,
            width: 10.0,
          },
        ],
      },
    };

    try {
      await calculateAreaUseCase.execute(ResultCalculate);
    } catch (error) {
      console.log(error);
      expect(error.message).toEqual('A área das paredes não pode ser maior que 50');
      expect(error.statusCode).toEqual(400);
    }
  });
  it('should throw an error if the difference between door and wall size should be greater than 0.30 cm', async () => {
    const calculate = new Calculate();
    const calculateAreaUseCase = new CalculatorAreaUseCase(calculate);

    const ResultCalculate: ContentCalculateType = {
      wall: {
        measure: [
          {
            height: 2.0,
            width: 2.0,
          },
          {
            height: 2.0,
            width: 2.0,
          },
          {
            height: 2.0,
            width: 2.0,
          },
          {
            height: 2.0,
            width: 2.0,
          },
        ],
      },

      door: {
        measure: [
          {
            height: 3.0,
            width: 3.0,
          },
        ],
      },

      window: {
        measure: [
          {
            height: 1.0,
            width: 1.0,
          },
        ],
      },
    };

    try {
      await calculateAreaUseCase.execute(ResultCalculate);
    } catch (error) {
      console.log(error);
      expect(error.message).toEqual(
        'Para uma melhor aplicação, a diferença entre o tamanho da porta e parede deve ser maior que 0,30 cm',
      );
      expect(error.statusCode).toEqual(400);
    }
  });
  it('should throw an error if area of doors and windows is greater than 50% of wall area.', async () => {
    const calculate = new Calculate();
    const calculateAreaUseCase = new CalculatorAreaUseCase(calculate);

    const ResultCalculate: ContentCalculateType = {
      wall: {
        measure: [
          {
            height: 3.0,
            width: 3.0,
          },
          {
            height: 3.0,
            width: 3.0,
          },
          {
            height: 3.0,
            width: 3.0,
          },
          {
            height: 3.0,
            width: 3.0,
          },
        ],
      },

      door: {
        measure: [
          {
            height: 2.0,
            width: 2.0,
          },
        ],
      },

      window: {
        measure: [
          {
            height: 5.0,
            width: 5.0,
          },
        ],
      },
    };

    try {
      await calculateAreaUseCase.execute(ResultCalculate);
    } catch (error) {
      console.log(error);
      expect(error.message).toEqual('O total de área das portas e janelas deve ser no máximo 50% da área de parede.');
      expect(error.statusCode).toEqual(400);
    }
  });
});
