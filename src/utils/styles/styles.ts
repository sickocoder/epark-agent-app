import { makeSimpleStyle } from './makers';

/* eslint-disable import/prefer-default-export */
export const makePropToStyleMapper =
  (basicStyles: Record<string, any>, availableStyles: Record<string, any>) =>
  (props: Record<string, any>) =>
    Object.keys(props)
      .map((prop) => {
        const isSimpleStyle = basicStyles[prop];

        if (isSimpleStyle) {
          return makeSimpleStyle(prop, props[prop]);
        }

        const styleFunction = availableStyles[prop];
        const isPropBoolean = typeof prop === 'boolean';

        if (props[prop] && styleFunction) {
          return isPropBoolean ? styleFunction() : styleFunction(props[prop]);
        }
        return ``;
      })
      .join('');
