// Interface.
import type { AdaptableDataShape } from './adaptable.data.shape';
import type { DataAdapterConstructor, DataAdapterShape } from '@typedly/data-adapter';
/**
 * @description The constructor interface for data types with adapter.
 * @export
 * @interface AdaptableDataConstructor
 * @template {DataAdapterShape<T, C, R>} A The data adapter instance type.
 * @template {AdaptableDataShape<A, T, C, R>} I The data instance type.
 * @template {{ async?: boolean }} [C=A extends DataAdapterShape<any, infer V, any> ? V : any] The configuration type, inferred from A if possible.
 * @template [T=A extends DataAdapterShape<infer U, any, any> ? U : any] The underlying value type, inferred from A if possible.
 * @template {boolean} [R=A extends DataAdapterShape<T, C, infer U> ? U extends boolean ? U : false : false] The async flag, inferred from A if possible.
 * @template {readonly any[]} [G=[]] The additional arguments type.
 */
export interface AdaptableDataConstructor<
  A extends DataAdapterShape<T, R> | undefined,
  I extends AdaptableDataShape<A, T, R>,
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

// export interface AdaptableDataConstructor<
//   A extends DataAdapterShape<C, T, R> | undefined,
//   I extends AdaptableDataShape<A, C, T, R>,
//   C extends DataSettings<R> = InferSettings<A>,
//   T = InferValue<A>,
//   R extends boolean = InferAsyncOf<[C, A, I]>,
//   G extends readonly any[] = []
// > {
//   new (
//     settings: C,
//     value: T | undefined,
//     adapter: A extends undefined ? undefined : DataAdapterConstructor<A, C, T, R, G>,
//     ...args: G
//   ): I;
// }
