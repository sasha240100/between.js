
/**
 * Loop mode
 */
export type LoopMode = "repeat" | "bounce";
export type EventEmmit = "start" | "update" | "complete";

/**
* A collection of easing methods defining ease-in ease-out curves.
*/
export interface Easing extends Function {
  /**
    * Linear easing.
    *
    * @class Easing.Linear
    */
   Linear: {

    /**
    * Ease-in.
    *
    * @method Easing.Linear#In
    * @param {number} k - The value to be tweened.
    * @returns {number} k^2.
    */
    None: Function

},

/**
* Quadratic easing.
*
* @class Easing.Quadratic
*/
Quadratic: {

    /**
    * Ease-in.
    *
    * @method Easing.Quadratic#In
    * @param {number} k - The value to be tweened.
    * @returns {number} k^2.
    */
    In: Function,

    /**
    * Ease-out.
    *
    * @method Easing.Quadratic#Out
    * @param {number} k - The value to be tweened.
    * @returns {number} k* (2-k).
    */
    Out: Function,

    /**
    * Ease-in/out.
    *
    * @method Easing.Quadratic#InOut
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    InOut: Function

},

/**
* Cubic easing.
*
* @class Easing.Cubic
*/
Cubic: {

    /**
    * Cubic ease-in.
    *
    * @method Easing.Cubic#In
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    In: Function

    /**
    * Cubic ease-out.
    *
    * @method Easing.Cubic#Out
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    Out: Function

    /**
    * Cubic ease-in/out.
    *
    * @method Easing.Cubic#InOut
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    InOut: Function

},

/**
* Quartic easing.
*
* @class Easing.Quartic
*/
Quartic: {

    /**
    * Quartic ease-in.
    *
    * @method Easing.Quartic#In
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    In: Function,

    /**
    * Quartic ease-out.
    *
    * @method Easing.Quartic#Out
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    Out: Function,

    /**
    * Quartic ease-in/out.
    *
    * @method Easing.Quartic#InOut
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    InOut: Function

},

/**
* Quintic easing.
*
* @class Easing.Quintic
*/
Quintic: {

    /**
    * Quintic ease-in.
    *
    * @method Easing.Quintic#In
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    In: Function,

    /**
    * Quintic ease-out.
    *
    * @method Easing.Quintic#Out
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    Out: Function,

    /**
    * Quintic ease-in/out.
    *
    * @method Easing.Quintic#InOut
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    InOut: Number

},

/**
* Sinusoidal easing.
*
* @class Easing.Sinusoidal
*/
Sinusoidal: {

    /**
    * Sinusoidal ease-in.
    *
    * @method Easing.Sinusoidal#In
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    In: Function,

    /**
    * Sinusoidal ease-out.
    *
    * @method Easing.Sinusoidal#Out
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    Out: Function,

    /**
    * Sinusoidal ease-in/out.
    *
    * @method Easing.Sinusoidal#InOut
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    InOut: Function

},

/**
* Exponential easing.
*
* @class Easing.Exponential
*/
Exponential: {

    /**
    * Exponential ease-in.
    *
    * @method Easing.Exponential#In
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    In: Function,

    /**
    * Exponential ease-out.
    *
    * @method Easing.Exponential#Out
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    Out: Function,

    /**
    * Exponential ease-in/out.
    *
    * @method Easing.Exponential#InOut
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    InOut: Function

},

/**
* Circular easing.
*
* @class Easing.Circular
*/
Circular: {

    /**
    * Circular ease-in.
    *
    * @method Easing.Circular#In
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    In: Function,

    /**
    * Circular ease-out.
    *
    * @method Easing.Circular#Out
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    Out: Function,

    /**
    * Circular ease-in/out.
    *
    * @method Easing.Circular#InOut
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    InOut: Function

},

/**
* Elastic easing.
*
* @class Easing.Elastic
*/
Elastic: {

    /**
    * Elastic ease-in.
    *
    * @method Easing.Elastic#In
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    In: Function,

    /**
    * Elastic ease-out.
    *
    * @method Easing.Elastic#Out
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    Out: Function,

    /**
    * Elastic ease-in/out.
    *
    * @method Easing.Elastic#InOut
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    InOut: Function

},

/**
* Back easing.
*
* @class Easing.Back
*/
Back: {

    /**
    * Back ease-in.
    *
    * @method Easing.Back#In
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    In: Function,

    /**
    * Back ease-out.
    *
    * @method Easing.Back#Out
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    Out: Function,

    /**
    * Back ease-in/out.
    *
    * @method Easing.Back#InOut
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    InOut: Function

},

/**
* Bounce easing.
*
* @class Easing.Bounce
*/
Bounce: {

    /**
    * Bounce ease-in.
    *
    * @method Easing.Bounce#In
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    In: Function,

    /**
    * Bounce ease-out.
    *
    * @method Easing.Bounce#Out
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    Out: Function,

    /**
    * Bounce ease-in/out.
    *
    * @method Easing.Bounce#InOut
    * @param {number} k - The value to be tweened.
    * @returns {number} The tweened value.
    */
    InOut: Function
  }
}

export class Between {

  /**
   * Creates a new Between instance
   * @param from start
   * @param to end
   */
  constructor(from: Number|Object|[Number|Object], to: Number|Object|[Number|Object]);

 
  /**
   * Sets duration
   * @param duration duration in ms
   */
  time(duration: Number): this;

  /**
   * Set loop mode and repeat times
   * @param mode the loop mode
   * @param repeatTime if not defined, then treats as endless
   */
  loop(mode: LoopMode, repeatTime?: Number): this;

 
  /**
   * Set easing function
   * @param easing Easing type
   */
  easing(easing: Easing | Function): this;

  /**
   * Adds event listener
   * @param eventName 
   * @param callback 
   */
  on(eventName: EventEmmit, callback: Function): this;

  /**
   * Pauses
   */
  pause(): this;

  /**
   * Starts (if was paused)
   */
  play(): this;

  /**
   * Returns `true` if paused
   */
  isPaused: boolean;
}