// Interface.
import type { AdaptableDataShape } from './adaptable.data.shape';
import type { DataAdapterConstructor, DataAdapterShape } from '@typedly/data-adapter';
/**
 * @description The constructor interface for data types with adapter.
 * @export
 * @interface AdaptableDataConstructor
 * @template {DataAdapterShape<T, R> | undefined} A The data adapter instance type.
 * @template {AdaptableDataShape<A, T, R>} I The data instance type.
 * @template T The value type.
 * @template {boolean} [R=false] The async flag, which can be inferred from `A` if possible.
 * @template {readonly any[]} [G=[]] The additional arguments type.
 */
export interface AdaptableDataConstructor<
  I extends AdaptableDataShape<A, T, R>,
  A extends DataAdapterShape<T, R> | undefined,
  T,
  R extends boolean = false,
  G extends readonly any[] = []
> {
  new (
    value?: T,
    adapter?: DataAdapterConstructor<A, T, R, G>,
    ...args: G
  ): I;
}
