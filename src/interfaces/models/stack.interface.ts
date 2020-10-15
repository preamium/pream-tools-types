import * as mongoose from 'mongoose'
import { IApp, ITemplate } from '..'

export interface IStackAppDefinition extends mongoose.Document {
    app: IApp,
    params: any,
    template: string,
}

export interface IStack extends mongoose.Document {
    attach: string,
    scroll: number,
    apps: IStackAppDefinition[],
}
