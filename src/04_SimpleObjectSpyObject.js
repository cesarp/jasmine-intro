var MyObject = {
  sayHi: function (person) {
    return 'Hi ' + person.getName();
  },

  move: function (distance, person) {
    if (distance > 2) {
      person.run(distance);
    } else {
      person.walk(distance);
    }
  }
};

describe('MyObject - createSpyObj', function () {
  var myObject, person;

  beforeEach(function () {
    myObject = Object.create(MyObject);

    person = jasmine.createSpyObj('person', ['getName', 'run', 'walk']);
  });

  it('sayHi should return Hi + person name', function () {
    person.getName.and.returnValue('cesar');

    var result = myObject.sayHi(person);

    expect(result).toEqual('Hi cesar');
  });

  it('sayHi should call person.getName', function () {
    myObject.sayHi(person);

    expect(person.getName).toHaveBeenCalled();
  });

  it('move should call run when distance > 2', function () {
    myObject.move(2.5, person);

    expect(person.run).toHaveBeenCalledWith(2.5);
  });

  it('move should call walk when distance < 2', function () {
    myObject.move(1, person);

    expect(person.walk).toHaveBeenCalledWith(1);
  });
});
