import { CauseException } from '@effect-app/infra/errors'
// TODO Removed, find the alternative
// import { runtimeDebug } from '@effect/data/Debug'

import { BaseConfig } from './config.js'

// runtimeDebug.traceStackLimit = 50
const appConfig = BaseConfig.config.runSync$
if (process.argv.includes('--debug') || appConfig.env === 'local-dev') {
  // runtimeDebug.minumumLogLevel = 'Debug'
  // runtimeDebug.tracingEnabled = true
  // runtimeDebug.traceStackLimit = 100
  // runtimeDebug.filterStackFrame = _ => true
}

const main = Effect.gen(function* ($) {
  const cfg = {}
  console.debug(`Config: ${JSON.stringify(cfg, undefined, 2)}`)

  return yield* $(Effect.never.scoped /*.provideLayer(api(cfg))*/)
})

const program = main //.provideSomeLayer()

export class AppException<E> extends CauseException<E> {
  constructor(cause: Cause<E>) {
    super(cause, 'App')
  }
}
const reportAppError = <E>(cause: Cause<E>) => {
  console.error(new AppException(cause))
  return Effect.unit
}

program.tapErrorCause(reportAppError).runMain$()
