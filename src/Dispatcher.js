"use strict";

var Store = {};

/**
 * Utility responsible for triggering the special/custom events from within the components.
 * With this utility you are able to register, unregister and trigger custom event handlers.
 *
 * @class Dispatcher
 * @public
 * @version 1.0
 * @author Ricardo Machado <rmachado@travix.com>
 * @example
 *     var fnHandler = function( data, store ){
 *       console.log('Storing my data in the store');
 *       store.myData = data;
 *     };
 *     var myObject = {
 *       foo: bar
 *     };
 *
 *     Dispatcher.register('myCustomEvent', fnHandler);
 *     Dispatcher.unregister('myCustomEvent', fnHandler);
 *     Dispatcher.trigger('myCustomEvent', myObject);
 */
var Dispatcher = {
  /**
   * @property {Object} _eventHandlers Private property to track the event handlers registered
   * @private
   */
  _eventHandlers: {},

  /**
   * Registers a handler for a given event name
   *
   * @method register
   * @param {String} eventName Name of the event that will trigger the function
   * @param {Function} handlerFn Function to execute when triggering the event
   * @return {void}
   * @public
   */
  register: function (eventName, handlerFn) {
    if (
      typeof eventName === "string" &&
      typeof handlerFn === "function" &&
      "call" in handlerFn
    ) {
      if (!(eventName in this._eventHandlers)) {
        this._eventHandlers[eventName] = [];
      }

      this._eventHandlers[eventName].push(handlerFn);
    }
  },

  /**
   * Un-registers a handler for a given event name
   *
   * @method unregister
   * @param {String} eventName Name of the event used to register the function
   * @param {Function} handlerFn Same function used on the register
   * @return {void}
   * @public
   */
  unregister: function (eventName, handlerFn) {
    if (
      typeof eventName === "string" &&
      typeof handlerFn === "function" &&
      "call" in handlerFn
    ) {
      if (eventName in this._eventHandlers) {
        var index;
        while (
          (index = this._eventHandlers[eventName].indexOf(handlerFn)) !== -1
        ) {
          this._eventHandlers[eventName].splice(index, 1);
        }

        if (!this._eventHandlers[eventName].length) {
          delete this._eventHandlers[eventName];
        }
      }
    }
  },

  /**
   * Triggers the functions registered for a specific event.
   *
   * @method dispatch
   * @param {String} eventName Name of the event that you want to run the functions from.
   * @param {Object|undefined} [err] Optional. In case there's an error, this parameter contains the error object.
   * @param {Object|undefined} [data] Optional. Data related to the event.
   * @return {void}
   * @public
   */
  dispatch: function (eventName, err, data) {
    if (typeof eventName === "string" && eventName in this._eventHandlers) {
      this._eventHandlers[eventName].forEach(function (fn) {
        fn(err, data, Store);
      });
    }
  },
};
