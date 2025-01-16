import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    username: process.env.USERNAMEEXAMPLE,
    password: process.env.PASSWORDEXAMPLE,
    adminPortalUser: process.env.ADMINPORTALUSER,
    adminPortalPassword: process.env.ADMINPORTALPASSWORD,
    appPortalname: process.env.APPPORTALNAME,
    appPortalLastName: process.env.APPPORTALLASTNAME,
};