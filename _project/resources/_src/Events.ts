import type {} from '@effect-app/prelude/_global'

@useClassFeaturesForSchema
export class BogusEvent extends MNModel<
  BogusEvent,
  BogusEvent.ConstructorInput,
  BogusEvent.Encoded,
  BogusEvent.Props
>()({
  _tag: literal('BogusEvent'),
  id: StringId.withDefault,
  at: date.withDefault,
}) {}

export const ClientEvents = smartClassUnion({ BogusEvent })
export type ClientEvents = ParsedShapeOfCustom<typeof ClientEvents>

// codegen:start {preset: model}
//
/* eslint-disable */
export namespace BogusEvent {
  /**
   * @tsplus type BogusEvent.Encoded
   * @tsplus companion BogusEvent.Encoded/Ops
   */
  export class Encoded extends EncodedClass<typeof BogusEvent>() {}
  export type ConstructorInput = ConstructorInputFromApi<typeof BogusEvent>
  export type Props = GetProvidedProps<typeof BogusEvent>
}
/* eslint-enable */
//
// codegen:end
//
