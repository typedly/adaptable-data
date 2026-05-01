// Type & Interface.
import type { Adaptable } from "@typedly/data-traits";
import type { ConfigurableDataShape } from "@typedly/configurable-data";
import type { DataSettings } from "@typedly/data";
/**
 * @description The base interface for adaptable and configurable data shapes.
 * @export
 * @interface AdaptableConfigurableBase
 * @template A The adapter type.
 * @template {DataSettings<R> | undefined} C The settings type.
 * @template T The value type.
 * @template {boolean} R The async flag.
 * @extends {Adaptable<A>}
 * @extends {ConfigurableDataShape<C, T, R>}
 */
export interface AdaptableConfigurableBase<
  A,
  C extends DataSettings<R> | undefined,
  T,
  R extends boolean
> extends Adaptable<A>, ConfigurableDataShape<C, T, R> {}