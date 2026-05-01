// Interface.
import type { Adaptable } from "@typedly/data-traits";
import type { DataAdapterShape } from "@typedly/data-adapter";
import type { DataShape, InferAsync } from "@typedly/data";
/**
 * @description The shape of a data type with optional adapter.
 * @export
 * @interface AdaptableDataShape
 * @template {DataAdapterShape<T, R> | undefined} A The adapter type, which can be undefined for more flexible inference.
 * @template T The value type.
 * @template {boolean} [R=InferAsync<A>] The async flag, inferred from `A` if possible.
 * @extends {Adaptable<A>}
 * @extends {DataShape<T, R>}
 */
export interface AdaptableDataShape<
  A extends DataAdapterShape<T, R> | undefined,
  T,
  R extends boolean = InferAsync<A>
> extends Adaptable<A>, DataShape<T, R> {}
