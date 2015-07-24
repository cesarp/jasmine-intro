function sayHi(name) {
  return 'Hi ' + name;
}

describe('sayHi', function () {
  var name;

  it('should return Hi cesar', function () {
    // Arrange
    name = 'cesar';

    // Act
    var result = sayHi(name);

    // Assert
    expect(result).toEqual('Hi cesar');
  });
});
