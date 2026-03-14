// Interface.
import { DataAdapterShape } from "@typedly/data-adapter";
import { AdaptableDataShape } from "./adaptable.data.shape";
/**
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