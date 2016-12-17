/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.3.2.dev3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdOkLinks = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdPlanetsPlanetIdOkLinks model module.
   * @module model/GetCharactersCharacterIdPlanetsPlanetIdOkLinks
   * @version 0.3.2.dev3
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdPlanetsPlanetIdOkLinks</code>.
   * link object
   * @alias module:model/GetCharactersCharacterIdPlanetsPlanetIdOkLinks
   * @class
   * @param destinationPinId {Integer} destination_pin_id integer
   * @param linkLevel {Integer} link_level integer
   * @param sourcePinId {Integer} source_pin_id integer
   */
  var exports = function(destinationPinId, linkLevel, sourcePinId) {
    var _this = this;

    _this['destination_pin_id'] = destinationPinId;
    _this['link_level'] = linkLevel;
    _this['source_pin_id'] = sourcePinId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdPlanetsPlanetIdOkLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdPlanetsPlanetIdOkLinks} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdPlanetsPlanetIdOkLinks} The populated <code>GetCharactersCharacterIdPlanetsPlanetIdOkLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('destination_pin_id')) {
        obj['destination_pin_id'] = ApiClient.convertToType(data['destination_pin_id'], 'Integer');
      }
      if (data.hasOwnProperty('link_level')) {
        obj['link_level'] = ApiClient.convertToType(data['link_level'], 'Integer');
      }
      if (data.hasOwnProperty('source_pin_id')) {
        obj['source_pin_id'] = ApiClient.convertToType(data['source_pin_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * destination_pin_id integer
   * @member {Integer} destination_pin_id
   */
  exports.prototype['destination_pin_id'] = undefined;
  /**
   * link_level integer
   * @member {Integer} link_level
   */
  exports.prototype['link_level'] = undefined;
  /**
   * source_pin_id integer
   * @member {Integer} source_pin_id
   */
  exports.prototype['source_pin_id'] = undefined;



  return exports;
}));

