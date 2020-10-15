import * as mongoose from 'mongoose'
import { IApp, ITemplate } from '..'

export interface IStackAppDefinition extends mongoose.Document {
    app: IApp,
    params: {
        woeid?: string,
        title?: string,
        timezone?: string,
        lang?: string,
    },
    template: string,
}

export interface IStack extends mongoose.Document {
    attach: string,
    scroll: number,
    apps: IStackAppDefinition[],
}
