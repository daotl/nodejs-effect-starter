import { reportError } from '@effect-app/infra/errorReporter'
import { CauseException } from '@effect-app/infra/errors'

import { runtimeDebug } from '@effect/io/Debug'

runtimeDebug.traceStackLimit = 50
if (process.argv.includes('--debug')) {
  runtimeDebug.minumumLogLevel = 'Debug'
  runtimeDebug.tracingEnabled = true
  runtimeDebug.traceStackLimit = 100
  // runtimeDebug.filterStackFrame = _ => true
}

const main = Effect.gen(function* ($) {
  const cfg = {}
  console.debug(`Config: ${JSON.stringify(cfg, undefined, 2)}`)

  return yield* $(Effect.never().scoped/*.provideLayer(api(cfg))*/)
})

const program = main//.provideSomeLayer()

export class AppException<E> extends CauseException<E> {
  constructor(cause: Cause<E>) {
    super(cause, 'App')
  }
}
const reportAppError = reportError((cause) => new AppException(cause))

program.tapErrorCause(reportAppError).runMain$()
