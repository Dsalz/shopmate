/**
 * This file creates custom props validation rules.
 * See customProp here: https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */

// Allowed rating is 1,2,3,4,5
export function starSize(props, propName, componentName) {
  const err = `Invalid prop ${propName} supplied to ${componentName}. ${propName} must be an integer between 1 and 5`;
  const sizeIsNotNumberType = Number(props[propName]) !== props[propName];
  const sizeIsNotBetween1and5 = props[propName] > 5 || props[propName] < 1;

  if (sizeIsNotNumberType || sizeIsNotBetween1and5) {
    return new Error(err);
  }
}
