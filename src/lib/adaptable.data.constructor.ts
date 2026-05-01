// Interface.
import type { AdaptableDataShape } from './adaptable.data.shape';
import type { DataAdapterConstructor, DataAdapterShape } from '@typedly/data-adapter';
/**
 * @description The constructor interface for data types with adapter.
 * @export
 * @interface AdaptableDataConstructor
 * @template {DataAdapterShape<T, S> | undefined} A The data adapter instance type.
 * @template {AdaptableDataShape<A, T, S>} I The data instance type.
 * @template T The value type.
 * @template {boolean} S The async flag, which can be inferred from `A` if possible.
 * @template {readonly any[]} [G=[]] The additional arguments type.
 */
export interface AdaptableDataConstructor<
  I extends AdaptableDataShape<A, T, S>,
  A extends DataAdapterShape<T, S> | undefined,
  T,
  S extends boolean,
  G extends readonly any[] = []
> {
  new (
    value?: T,
    adapter?: DataAdapterConstructor<A, T, S, G>,
    ...args: G
  ): I;
}
