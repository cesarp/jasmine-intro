var MyObject = {
  sayHi: function (person) {
    return 'Hi ' + person.getName();
  }
};

describe('MyObject - beforeEach', function () {
  var myObject, person;

  beforeEach(function () {
    myObject = Object.create(MyObject);

    person = {
      getName: function () {
        return 'cesar';
      }
    };
  });

  it('should return Hi + person name', function () {
    var result = myObject.sayHi(person);

    expect(result).toEqual('Hi cesar');
  });

  it('should call person.getName', function () {
    spyOn(person, 'getName');

    myObject.sayHi(person);

    expect(person.getName).toHaveBeenCalled();
  });
});
