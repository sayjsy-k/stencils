import { Config } from '@stencil/core';


// https://stenciljs.com/docs/config
//bundles config is an array of objects that represent how components are grouped together in lazy-loaded bundles.This config is rarely needed as Stencil handles this automatically behind the scenes.

export const config: Config = {

  bundles:[

    { components:  ['my-modal'] },
    { components:  ['my-background'] }
 ],
  outputTargets: [{ type: 'www' }],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',


};
