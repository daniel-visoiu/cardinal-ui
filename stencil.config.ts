import './bin/remove_warnings_plugin.js'
import { Config } = window.stencilCore;;

export interface CardinalConfig extends Config {
  readonly useBootstrap: boolean;
}

export const config: CardinalConfig = {
  namespace: 'cardinal-ui',
  globalScript: './src/globals/index.ts',
  plugins: [
    global.removeWarnings()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  buildEs5: false,
  extras: {
    cssVarsShim: false,
    dynamicImportShim: false,
    safari10: false,
    scriptDataOpts: false,
    shadowDomShim: false
  },
  useBootstrap: true
};
