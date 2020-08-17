import { ISite, IChannel, IApp } from '..';
export interface IAppRequestPayload {
    app: IApp;
    site: ISite;
    channel: IChannel;
}
