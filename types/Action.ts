export type PostBackAction = {
  type: string,
  label?: string,
  data: string,
  displayText?: string,
  text?: string
};

export type MessageAction = {
  type: string,
  label?: string,
  text: string
};

export type URIAction = {
  type: string,
  label?: string,
  uri: string,
  altUri: { desktop: string }
};

export type DatetimePickerAction = {
  type: string,
  label?: string,
  data: string,
  mode: string,
  initital?: string,
  max?: string,
  min?: string
};

export type CameraAction = {
  type: string,
  label: string
};

export type CameraRollAction = {
  type: string,
  label: string
};

export type LocationAction = {
  type: string,
  label: string
};

export type RichMenuSwitchAction = {
  type: string,
  label?: string,
  richMenuAliasId: string,
  data: string
};

export type Action =
  PostBackAction |
  MessageAction |
  URIAction |
  DatetimePickerAction |
  CameraAction |
  CameraRollAction |
  LocationAction |
  RichMenuSwitchAction;
