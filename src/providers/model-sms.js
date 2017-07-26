/* @flow */

// TODO: other SMS providers
export type SmsProviderType = {
  type: 'logger'
} | {
  type: 'nexmo',
  apiKey: string,
  apiSecret: string,
  applicationId: string,
  privateKey: string
} | {
  type: 'twilio',
  apiKey: string,
  apiSecret: string,
  applicationId: string,
  privateKey: string
}