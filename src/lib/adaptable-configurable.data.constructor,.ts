// Interface & Type.
import type { AdaptableConfigurableDataShape } from "./adaptable.configurable.data.shape";
import type { ConfigurableDataAdapterConstructor, ConfigurableDataAdapterShape } from "@typedly/data-adapter";
import type { DataSettings, InferAsyncOf } from "@typedly/data";
/**
 * @description Represents the constructor of an adaptable and configurable data type, which can be instantiated with optional settings, value, and adapter.
 * @export
 * @interface AdaptableConfigurableDataConstructor
 * @template {AdaptableConfigurableDataShape<A, C, T, S>} I The instance type.
 * @template {ConfigurableDataAdapterShape<C, T, S> | undefined} A The adapter type.
 * @template {DataSettings<S> | undefined} C The settings type.
 * @template T The value type.
 * @template {boolean} [S=InferAsyncOf<[C, A]>] The async flag.
 * @template {readonly any[]} [G=[]] The additional arguments type.
 * @template [AC=ConfigurableDataAdapterConstructor<A, C, T, S, G>] The adapter constructor type.
 */
export interface AdaptableConfigurableDataConstructor<
  I extends AdaptableConfigurableDataShape<A, C, T, S>,
  A extends ConfigurableDataAdapterShape<C, T, S> | undefined,
  C extends DataSettings<S> | undefined,
  T,
  S extends boolean = InferAsyncOf<[C, A]>,
  G extends readonly any[] = [],
  AC = ConfigurableDataAdapterConstructor<A, C, T, S, G>
> {
  new (
    settings?: C,
    value?: T,
    adapter?: AC,
    ...args: G
  ): I;
}