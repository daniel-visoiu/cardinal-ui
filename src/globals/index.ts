export * from "../../cardinal-core/dist/collection";

const { setMode } = window.stencilCore;

// required in order to include cardinalCore inside esm file

export default () => setMode(element => {
  return (element as any).mode || element.getAttribute('mode') || 'default';
});
