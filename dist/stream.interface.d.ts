import * as mongoose from 'mongoose';
import { ISite } from './site.interface';
import { IChannel } from './channel.interface';
import { IApp } from './app.interface';
export interface IStream extends mongoose.Document {
    key: string;
    site: ISite;
    channel: IChannel;
    apps: IApp[];
}
