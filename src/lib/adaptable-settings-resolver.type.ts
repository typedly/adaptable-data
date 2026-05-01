// Type & Interface.
import type { CacheableSettings, DataSettings } from "@typedly/data";
import type { ConfigurableDataAdapterShape } from "@typedly/data-adapter";
/**
 * @description The adaptable settings type, which conditionally requires `fetcher` and `updater` properties from `CacheableSettings<T>` if the adapter type `A` is undefined and the async flag `R` is true.
 * This allows for flexible configuration of adaptable data types, ensuring that necessary properties are included when no adapter is provided for asynchronous operations, while allowing for more concise settings when an adapter is present or when operations are synchronous.
 * @export
 * @template {DataSettings<S> & CacheableSettings<T>} C The settings type, which combines data settings and cacheable settings.
 * @template T The type of data value.
 * @template {boolean} S The type of asynchronous operations, which determines whether the data operations are asynchronous (true) or synchronous (false).
 * @template {ConfigurableDataAdapterShape<C, T, S> | undefined} A The adapter type, which can be undefined for more flexible inference.
 */
export type AdaptableSettingsResolver<
  C extends DataSettings<S> & CacheableSettings<T>,
  T,
  S extends boolean,
  A extends ConfigurableDataAdapterShape<C, T, S> | undefined
> = A extends undefined
  ? (S extends true
    ? C & Required<Pick<CacheableSettings<T>, 'fetcher' | 'updater'>>
    : C)
  : C;