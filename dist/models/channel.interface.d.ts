import { IStack, ITemplate } from '..';
import * as mongoose from 'mongoose';
export interface IChannel extends mongoose.Document {
    name: string;
    template: ITemplate;
    stacks: IStack[];
}
