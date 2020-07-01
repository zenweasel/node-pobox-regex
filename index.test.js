const matchAddressByRegex = require('./index.js');

const destination = {
  addressPatternShouldMatch: true,
  addressPattern: '\\b[p]*(ost)*\\.*\\s*[o|0]*(ffice)*\\.*\\s*b[o|0]x\\b',
};

describe('Should match a simple PO Box', () => {
  test('with periods', () => {
    const shippingAddress = {
      address1: 'P.O. Box 123',
      address2: ' ',
    };
    const poBoxMatch1 = matchAddressByRegex(destination, shippingAddress);
    expect(poBoxMatch1).toEqual(true);
  });

  test('without periods', () => {
    const shippingAddress = {
      address1: 'PO Box 123',
      address2: ' ',
    };
    const poBoxMatch1 = matchAddressByRegex(destination, shippingAddress);
    expect(poBoxMatch1).toEqual(true);
  });

  test('full words', () => {
    const shippingAddress = {
      address1: 'Post Office Box 123',
      address2: '',
    };
    const poBoxMatch1 = matchAddressByRegex(destination, shippingAddress);
    expect(poBoxMatch1).toEqual(true);
  });

  test('split across two lines', () => {
    const shippingAddress = {
      address1: 'Post Office',
      address2: 'Box 123',
    };
    const poBoxMatch1 = matchAddressByRegex(destination, shippingAddress);
    expect(poBoxMatch1).toEqual(true);
  });
});
