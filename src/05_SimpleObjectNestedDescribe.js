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

describe('MyObject - Nested Describe', function () {
  var myObject, person;

  beforeEach(function () {
    myObject = Object.create(MyObject);

    person = jasmine.createSpyObj('person', ['getName', 'run', 'walk']);
  });

  describe('sayHi()', function () {
    it('should return Hi + person name', function () {
      person.getName.and.returnValue('cesar');

      var result = myObject.sayHi(person);

      expect(result).toEqual('Hi cesar');
    });

    it('should call person.getName', function () {
      myObject.sayHi(person);

      expect(person.getName).toHaveBeenCalled();
    });
  });

  describe('move()', function () {
    var distance;

    it('should call run when distance > 2', function () {
      distance = 2.5;

      myObject.move(distance, person);

      expect(person.run).toHaveBeenCalledWith(distance);
    });

    it('should call walk when distance < 2', function () {
      distance = 1;

      myObject.move(distance, person);

      expect(person.walk).toHaveBeenCalledWith(distance);
    });
  });
});
