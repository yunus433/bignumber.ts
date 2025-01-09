import { BigNumber } from './BigNumber';

test('Addition', () => {
  const xValues = ['23', '23.4', '6500', '0.001'];
  const yValues = ['78', '0.003', '0.000007970', '0.001'];

  xValues.forEach((xValue, index) => {
    const x = BigNumber.fromString(xValue);
    const y = BigNumber.fromString(yValues[index]);
    const result = x.add(y);

    expect(Number(result.toString())).toEqual(Number(xValue) + Number(yValues[index]));
  });
});


test('Multiplication', () => {
  const xValues = ['23', '23.4', '6500', '0.001'];
  const yValues = ['78', '0.003', '0.000007970', '0.001'];

  xValues.forEach((xValue, index) => {
    const x = BigNumber.fromString(xValue);
    const y = BigNumber.fromString(yValues[index]);
    const result = x.mul(y);

    expect(Number(result.toString())).toEqual(Number(xValue) * Number(yValues[index]));
  });
});
