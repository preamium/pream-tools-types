import * as mongoose from 'mongoose'

export interface ISite extends mongoose.Document {
    name: string,
    lang: string,
    timezone: string,
    woeid: string,
}
