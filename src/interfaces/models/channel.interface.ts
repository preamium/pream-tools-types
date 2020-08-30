import * as mongoose from 'mongoose'

export interface IChannel extends mongoose.Document {
    name: string,
    stacks: {
        id: string,
        params: [
            {
                woeid: string,
                title: string,
            }
        ],
    }
}
