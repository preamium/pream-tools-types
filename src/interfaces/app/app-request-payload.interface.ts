import { ISite, IChannel, IApp } from '..'

export interface IAppRequestPayload {
    site: ISite;
    channel: IChannel;
}
