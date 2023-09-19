import * as Controllers from './Usecases.js'
import { matchAllAlt } from './lib/routing.js'

export const all = Effect.all(Controllers).flatMap((_) =>
  Effect.all(matchAllAlt(_)),
)
