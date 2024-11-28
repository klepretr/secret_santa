import {IconifyIcon} from "@iconify/vue";

export interface ParticipantAssignment {
  uuid: string,
  donor: string,
  receiver?: string,
  copied: boolean
}

export type InputButtonIconSize = 'small' | 'medium' | 'large';

export interface InputButtonIconDef {
  name: IconifyIcon | string,
  color?: string,
  size?: InputButtonIconSize,
}

export interface InputButtonActionsDef {
  label: string,
  onClick: () => void,
  condition: () => boolean,
  color?: string,
  bgColor?: string
}