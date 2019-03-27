/**
 * This file creates custom props validation rules.
 * See customProp here: https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */

// Example: Allowed rating is 1,2,3,4,5
export function numberBetween1and5(props, propName, componentName) {
  const err = `Invalid prop ${propName} supplied to ${componentName}. ${propName} must be an integer between 1 and 5`;

  if (!isNumberType(props[propName]) || !numberBetween(props[propName], 1, 5)) {
    return new Error(err);
  }
}

// Example: Allowed heading is 1,2,3,4,5,6 or undefined
export function numberBetween1and6(props, propName, componentName) {
  const err = `Invalid prop ${propName} supplied to ${componentName}. ${propName} must be an integer between 1 and 6`;

  if (
    props[propName] !== undefined &&
    (!isNumberType(props[propName]) || !numberBetween(props[propName], 1, 6))
  ) {
    return new Error(err);
  }
}

// Internal
function numberBetween(element, start, end) {
  return element >= start && element <= end;
}

// Internal
function isNumberType(element) {
  return Number(element) === element;
}
