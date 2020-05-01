import { InjectionToken } from '@angular/core';
import { MimeTypeEnum } from './mimetype.model';

export type Method = 'POST' | 'GET' | 'PUT';

export interface DropTargetOptions {
  color: string;
  colorDrag: string;
  colorDrop: string;
  accept?: MimeTypeEnum[];
  capture?: 'user' | 'environment';
  multiple?: boolean;
  disableMultipart?: boolean;
}

export interface LoggerOptions {
  enabled?: boolean;
  debug?: boolean;
}

export interface UploadEndPoint {
  method?: Method;
  url?: string;
}

export interface InputFileOptions {
  accept?: MimeTypeEnum[];
  capture?: 'user' | 'environment';
  multiple?: boolean;
  disableMultipart?: boolean;
}

export const NGX_DROP_TARGET_OPTIONS = new InjectionToken<DropTargetOptions>(
  'Ngx drop Zone Options'
);
export const NGX_LOGGER_OPTIONS = new InjectionToken<LoggerOptions>(
  'Ngx Logger Options'
);

export const ngxDropTargetOptions: DropTargetOptions = {
  color: '',
  colorDrag: '',
  colorDrop: '',
  multiple: true,
  disableMultipart: false,
};

export const ngxloggerOptions: LoggerOptions = {
  enabled: false,
  debug: true,
};

export const ngxInputFileOptions: InputFileOptions = {
  multiple: true,
  disableMultipart: false,
};
