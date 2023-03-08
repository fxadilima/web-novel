/**
 * Create smart processors to handle different formats.
 *
 * @param {Options | null | undefined} [options]
 */
export function createLoader(options?: Options | null | undefined): {
    load: (url: string, context: unknown, defaultLoad: Function) => Promise<any>;
    getFormat: (url: string, context: unknown, defaultGetFormat: Function) => any;
    transformSource: (value: string, context: {
        [x: string]: unknown;
        url: string;
    }, defaultTransformSource: Function) => Promise<any>;
};
export type CompileOptions = import('@mdx-js/mdx/lib/compile.js').CompileOptions;
/**
 * Extra configuration.
 */
export type LoaderOptions = {
    /**
     * Several JSX runtimes, notably React below 18 and Emotion below 11.10.0,
     * don’t yet have a proper export map set up.
     * Export maps are needed to map `xxx/jsx-runtime` to an actual file in ESM.
     * This option fixes React et al by turning those into `xxx/jsx-runtime.js`.
     */
    fixRuntimeWithoutExportMap?: boolean | null | undefined;
};
/**
 * Configuration.
 */
export type Options = CompileOptions & LoaderOptions;
