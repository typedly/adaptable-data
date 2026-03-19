// Interface.
import { DataAdapterShape } from "@typedly/data-adapter";
import { AdaptableDataShape } from "./adaptable.data.shape";
/**
 * @deprecated This utility is redundant and should not be used. In favor of just using `InferSettings` from `@typedly/configurable-data` directly.
 * @see InferSettings from `@typedly/configurable-data` for a more robust and comprehensive type inference utility.
 * @description Infers the settings type from a data adapter, or adaptable data shape.
 * @export
 * @template T 
 * @template [F=undefined] 
 */
export type InferSettings<T, F = undefined> =
  T extends DataAdapterShape<infer C, any, any> 
    ? C
    : T extends AdaptableDataShape<any, infer C, any, any>
      ? C
      : F;