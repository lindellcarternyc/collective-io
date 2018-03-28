export const EmailError = 'Email Error'
export type EmailError = typeof EmailError

export const PasswordError = 'Password Error'
export type PasswordError = typeof PasswordError

export type AuthError = EmailError | PasswordError