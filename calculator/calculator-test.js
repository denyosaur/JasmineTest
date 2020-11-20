
describe("it should math properly", function() {
  it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:10000, years:10, rate:5})).toEqual('106.07');
  expect(calculateMonthlyPayment({amount:100000, years:20, rate:8})).toEqual('836.44');
  expect(calculateMonthlyPayment({amount:1000000, years:40, rate:20})).toEqual('16672.64');
  });


  it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:1000, years:5, rate:5})).toEqual('18.87');
  expect(calculateMonthlyPayment({amount:1827890098, years:80, rate:11})).toEqual('16758288.58');
  expect(calculateMonthlyPayment({amount:10000000, years:40, rate:15})).toEqual('125322.41');
  });
});

describe( "unusual amounts", function () {
  it("should handle unusually large amounts", function() {
    expect(calculateMonthlyPayment({amount:1000000000000, years:100, rate:40})).toEqual('33333333333.33');
    expect(calculateMonthlyPayment({amount:1234567890, years:10, rate:20})).toEqual('23858724.75');
  });

  it("should handle unusually small amounts", function() {
    expect(calculateMonthlyPayment({amount:10, years:2, rate:20})).toEqual('0.51');
    expect(calculateMonthlyPayment({amount:256, years:2, rate:2})).toEqual('10.89');
  });
});
/// etc
