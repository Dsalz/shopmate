/**
 * This file creates custom props validation rules.
 * See customProp here: https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */

// Example: Allowed rating is 1,2,3,4,5
export function numberBetween1and5(props, propName, componentName) {
  const err = `Invalid prop ${propName} supplied to ${componentName}. ${propName} must be an integer between 1 and 5`;
  const propIsNotNumberType = Number(props[propName]) !== props[propName];
  const propIsNotBetween1and5 = props[propName] > 5 || props[propName] < 1;

  if (propIsNotNumberType || propIsNotBetween1and5) {
    return new Error(err);
  }
}
