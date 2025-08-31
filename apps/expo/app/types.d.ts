import { config } from '@navly/config'

export type Conf = typeof config

declare module '@navly/ui' {
  interface TamaguiCustomConfig extends Conf {}
}
