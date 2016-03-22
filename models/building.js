"use strict";

class Building{
  constructor(data){
    this._properties = ["name","lat","long","shape","color","infoText"];
    for (var key in data) {
      if (this._properties.indexOf(key) !== -1){
        this['_'+key] = data[key];
      }
    }
  }
  getPos(){
    return {lat: this._lat, long: this._long};
  }
  spill(){
    var rObject = {};
    for (var key in this){
      rObject[key.substring(1)] = this[key];
    }
    return rObject;
  }
  set lat (lat)           { this._lat = lat }
  get lat ()              { return this._lat }
  set long (long)         { this._long = long }
  get long ()             { return this._long }
  set shape (shape)       { this._shape = shape }
  get shape ()            { return this._shape }
  set color (color)       { this._color = color }
  get color ()            { return this._color }
  set infoText (infoText) { this._infoText = infoText }
  get infoText ()         { return this._infoText }
  set name (name)         { this._name = name }
  get name ()             { return this._name }
}
module.exports = Building;
