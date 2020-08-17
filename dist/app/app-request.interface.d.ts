import { ISite, IChannel, IApp } from '..';
export interface IAppRequest {
    app: IApp;
    site: ISite;
    channel: IChannel;
}
