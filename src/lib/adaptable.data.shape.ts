// Interface.
import type { Adaptable } from "@typedly/data-traits";
import type { ConfigurableDataShape } from "@typedly/configurable-data";
import type { DataAdapterShape } from "@typedly/data-adapter";
import type { DataSettings } from "@typedly/data";
// Type.
import type { InferAdaptableValue } from "./infer-adaptable-value.type";
import type { InferAsyncOf } from "@typedly/data";
import type { InferSettings } from "./infer-settings.type";
/**
 * @description The shape of a data type with optional adapter.
 * @export
 * @interface AdaptableDataShape
 * @template {DataAdapterShape<C, T, R>} A The adapter type, which can be undefined for more flexible inference.
 * @template {DataSettings<R> | undefined} [C=InferSettings<A>] The settings type, inferred from `A` if possible.
 * @template [T=InferAdaptableValue<A>] The value type, inferred from `A` if possible.
 * @template {boolean} [R=InferAsyncOf<[C, A]>] The async flag, inferred from C or `A` if possible.
 * @extends {Adaptable<A>} The adaptable trait, which provides the adapter type `A`.
 * @extends {ConfigurableDataShape<C, T, R>} The configurable data shape, which provides the settings type `C`, value type `T`, and async flag `R`.
 */
export interface AdaptableDataShape<
  A extends DataAdapterShape<C, T, R>,
  C extends DataSettings<R> | undefined = InferSettings<A>,
  T = InferAdaptableValue<A>,
  R extends boolean = InferAsyncOf<[C, A]>
> extends Adaptable<A>, ConfigurableDataShape<C, T, R> {}