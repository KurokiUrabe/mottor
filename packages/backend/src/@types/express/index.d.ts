import { IKraftfahrzeug } from '@entities/kraftfahrzeug';
import { IUser } from '@entities/User';
import { IClientData } from '@shared/JwtService';


declare module 'express' {
    export interface Request  {
        body: {
            user: IUser
            email: string;
            password: string;
            kraftfahrzeug:IKraftfahrzeug
        };
    }
}


declare global {
    namespace Express {
        export interface Response {
            sessionUser: IClientData;
        }
    }
}
