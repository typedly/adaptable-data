// Type & Interface.
import type { Adaptable } from "@typedly/data-traits";
import type { ConfigurableDataShape } from "@typedly/configurable-data";
import type { DataSettings } from "@typedly/data";
/**
 * @description The base interface for adaptable and configurable data shapes.
 * @export
 * @interface AdaptableConfigurableBase
 * @template A The adapter type.
 * @template {DataSettings<S> | undefined} C The settings type.
 * @template T The value type.
 * @template {boolean} S The async flag.
 * @extends {Adaptable<A>}
 * @extends {ConfigurableDataShape<C, T, S>}
 */
export interface AdaptableConfigurableBase<
  A,
  C extends DataSettings<S> | undefined,
  T,
  S extends boolean
> extends Adaptable<A>, ConfigurableDataShape<C, T, S> {}