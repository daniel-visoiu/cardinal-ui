import { setMode } from '@stencil/core';

// required in order to include cardinalCore inside esm file
export * from "../../cardinal-core/dist/collection";

export default () => setMode(element => {
  return (element as any).mode || element.getAttribute('mode') || 'default';
});
