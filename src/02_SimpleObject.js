var MyObject = {
  sayHi: function (person) {
    return 'Hi ' + person.getName();
  }
};

describe('MyObject', function () {
  var myObject, person;

  it('should return Hi + person name', function () {
    myObject = Object.create(MyObject);
    person = {
      getName: function () {
        return 'cesar';
      }
    };

    var result = myObject.sayHi(person);

    expect(result).toEqual('Hi cesar');
  });

  it('should call person.getName', function () {
    var called = false;
    myObject = Object.create(MyObject);
    person = {
      getName: function () {
        called = true;
        return 'cesar';
      }
    };

    myObject.sayHi(person);

    expect(called).toBe(true);
  });
});
