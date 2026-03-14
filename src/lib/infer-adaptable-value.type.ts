// Interface
import type { AdaptableDataShape } from "./adaptable.data.shape";
import type { InferConfigurableValue } from "@typedly/configurable-data";
/**
 * @description Infers the value type from configurable, and data shape interface.
 * @export
 * @template I The data shape type.
 * @template [F=any] The fallback type if inference fails.
 */
export type InferAdaptableValue<I, F = any> =
  I extends AdaptableDataShape<any, any, infer T, any>
    ? T
    : InferConfigurableValue<I, F>;