// Poor man's RBAC

import type { Role } from './User.js'

/**
 * Allow role access
 */
export function allowRoles(role: Role, ...roles: readonly Role[]) {
  // rome-ignore lint/suspicious/noExplicitAny: ignore
  return (cls: any) => {
    Object.assign(cls, { allowedRoles: [role, ...roles] })
    return cls
  }
}
