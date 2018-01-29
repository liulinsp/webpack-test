const Tapable = require('Tapable')

function MyClass() {
    Tapable.call(this);
}

MyClass.prototype = Object.create(Tapable.prototype);

MyClass.prototype.method = function() {};

