// Interface.
import type { ConfigurableDataAdapterShape } from "@typedly/data-adapter";
import type { DataSettings } from "@typedly/data";
// Type.
import type { AdaptableConfigurableBase } from "./adaptable.configurable.base";
/**
 * @description The shape of a data type with optional adapter.
 * @export
 * @interface AdaptableConfigurableDataShape
 * @template {ConfigurableDataAdapterShape<C, T, S> | undefined} A The adapter type, which can be undefined for more flexible inference.
 * @template {DataSettings<S> | undefined} C The settings type.
 * @template T The value type.
 * @template {boolean} S The async flag.
 * @extends {AdaptableConfigurableBase<A, C, T, S>}
 */
export interface AdaptableConfigurableDataShape<
  A extends ConfigurableDataAdapterShape<C, T, S> | undefined,
  C extends DataSettings<S> | undefined,
  T,
  S extends boolean
> extends AdaptableConfigurableBase<A, C, T, S> {}
