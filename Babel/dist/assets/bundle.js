"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var greet = function greet(name) {
  console.log("HELLOW ".concat(name));
};

greet();
greet('mario');
greet('luigiii');
greet('link');

var User = /*#__PURE__*/function () {
  function User(name, lastname) {
    _classCallCheck(this, User);

    this.name = name, this.lastname = lastname, this.score = 10;
  }

  _createClass(User, [{
    key: "logout",
    value: function logout() {
      console.log("".concat(this.name, " \xE0 loggout"));
    }
  }]);

  return User;
}();
