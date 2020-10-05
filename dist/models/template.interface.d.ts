import * as mongoose from 'mongoose';
export interface ITemplate extends mongoose.Document {
    type: string;
    dom: string;
    style: string;
}
