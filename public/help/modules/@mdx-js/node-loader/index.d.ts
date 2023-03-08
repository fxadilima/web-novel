export { createLoader } from "./lib/index.js";
export type Options = import('./lib/index.js').CompileOptions;
export const load: (url: string, context: unknown, defaultLoad: Function) => Promise<any>;
export const getFormat: (url: string, context: unknown, defaultGetFormat: Function) => any;
export const transformSource: (value: string, context: {
    [x: string]: unknown;
    url: string;
}, defaultTransformSource: Function) => Promise<any>;
