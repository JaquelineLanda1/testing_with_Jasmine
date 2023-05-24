
it('should calculate the monthly rate correctly', function () {
  let values = {amount: 10000, years: 10, rate: 28};

  expect(calculateMonthlyPayment(values)).toEqual('248.97');
});


it("should return a result with 2 decimal places", function() {
  // ..
});

