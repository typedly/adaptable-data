// Interface.
import type { Adaptable } from "@typedly/data-traits";
import type { DataAdapterShape } from "@typedly/data-adapter";
import type { DataShape } from "@typedly/data";
/**
 * @description The shape of a data type with optional adapter.
 * @export
 * @interface AdaptableDataShape
 * @template {DataAdapterShape<T, S> | undefined} A The adapter type, which can be undefined for more flexible inference.
 * @template T The value type, which can be inferred from `A` if possible.
 * @template {boolean} S The async flag, which can be inferred from `A` if possible.
 * @extends {Adaptable<A>}
 * @extends {DataShape<T, S>}
 */
export interface AdaptableDataShape<
  A extends DataAdapterShape<T, S> | undefined,
  T,
  S extends boolean
> extends Adaptable<A>, DataShape<T, S> {}
