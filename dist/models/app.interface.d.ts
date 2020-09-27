import * as mongoose from 'mongoose';
export interface IApp extends mongoose.Document {
    name: string;
    uri: string;
    iconClass?: string;
}
