"use strict";

function Airport() {
  this._hangar = [];
};

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if(this.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  var index = this._hangar.indexOf(plane);
  if (index > -1) {
    this._hangar.splice(index, 1);
  };
};

Airport.prototype.isStormy = function(){
  return false;
};
