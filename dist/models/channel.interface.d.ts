import * as mongoose from 'mongoose';
export interface IChannel extends mongoose.Document {
    name: string;
    template: string;
    stacks: {
        id: string;
        params: [{
            woeid: string;
            title: string;
        }];
    };
}
