import { calculator } from './calculator';

describe('test for calculator', () => {
  describe('test for multiply',
    () => {
      it('#multyply should return a nine', () => {
        //Arrange
        const Calculator = new calculator();
        //Act
        const rta = Calculator.multiply(3, 3);
        //Assert
        expect(rta).toEqual(9);
      });

      it('#multyply should return a four', () => {
        //Arrange
        const Calculator = new calculator();
        //Act
        const rta = Calculator.multiply(4, 1);
        //Assert
        expect(rta).toEqual(4);
      });
    });

    describe('test for divide', () => {
      it('should return a some numbers', () => {
        //Arrange
        const Calculator = new calculator();
        //Act
        expect(Calculator.divide(6, 3)).toEqual(2);
        expect(Calculator.divide(5, 2)).toEqual(2.5);
      });

      it('for zero', () => {
        //Arrange
        const Calculator = new calculator();
        //Act
        expect(Calculator.divide(6, 0)).toBeNull();
        expect(Calculator.divide(5, 0)).toBeNull();
        expect(Calculator.divide(500, 0)).toBeNull();
      });

      it('test matchers', () => {
        const name = 'yemapier';
        let name2;

        expect(name).toBeDefined();
        expect(name2).toBeUndefined();

        expect(1 + 3 === 4).toBeTruthy(); //4
        expect(1 + 1 === 3).toBeFalsy();

        expect(5).toBeLessThan(10);
        expect(20).toBeGreaterThan(10);

        expect('12345').toMatch(/123/);
        expect(['apples', 'oranges', 'pears']).toContain('oranges');
      });
    });


    })



