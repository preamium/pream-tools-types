import { IApp } from 'interfaces';
import * as mongoose from 'mongoose'
import { ITemplate } from './template.interface';

export interface IChannel extends mongoose.Document {
    name: string,
    template: ITemplate,
    stacks: [{
        attach: string,
        scroll?: number,
        apps: [{
            app: IApp,
            params: [
                {
                    woeid?: string,
                    title?: string,
                    timezone?: string,
                    lang?: string,
                }
            ],
            paramsMap:
            {
                type: Map<string, string>,
                of: string,
            },
            template?: ITemplate,
        }],
    }]
}
