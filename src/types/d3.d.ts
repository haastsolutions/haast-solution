/**
 * TEMPORARY shim: `d3` ships no type declarations and `@types/d3` is not
 * installed, which made `tsc -b` (and therefore `npm run build`) fail.
 *
 * Proper fix:   npm i -D @types/d3     (then delete this file)
 */
declare module 'd3'
