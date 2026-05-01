// Interface.
import type { ConfigurableDataAdapterShape } from "@typedly/data-adapter";
import type { DataSettings } from "@typedly/data";
// Type.
import type { AdaptableConfigurableBase } from "./adaptable.configurable.base";
/**
 * @description The shape of a data type with optional adapter.
 * @export
 * @interface AdaptableConfigurableDataShape
 * @template {ConfigurableDataAdapterShape<C, T, R> | undefined} A The adapter type, which can be undefined for more flexible inference.
 * @template {DataSettings<R> | undefined} C The settings type.
 * @template T The value type.
 * @template {boolean} R The async flag.
 * @extends {AdaptableConfigurableBase<A, C, T, R>}
 */
export interface AdaptableConfigurableDataShape<
  A extends ConfigurableDataAdapterShape<C, T, R> | undefined,
  C extends DataSettings<R> | undefined,
  T,
  R extends boolean
> extends AdaptableConfigurableBase<A, C, T, R> {}
