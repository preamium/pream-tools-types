import * as mongoose from 'mongoose'
import { ISite, IChannel, IApp } from '..'

export interface IStream extends mongoose.Document {
    key: string,
    site: ISite,
    channel: IChannel
}
