import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";
console.log("Appwrite URL:", conf.appwriteUrl);
export class AppService {
  
  Client = new Client();
  Account;

  constructor() {
    this.Client
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectId);
    this.Account = new Account(this.Client);
  }

  async createAccount(email,password,name){
    try{
        const CreatedAccount = await this.Account.create(ID.unique(), email, password, name);
       if(CreatedAccount){
        return Login(email,password);
       }  else{
        return CreatedAccount;
       }     

    }catch(error){
        throw error;
    }
  }

  async Login(email,password) {
    try{
       return await this.Account.createEmailSessions(email,password);
    }catch(error){
        throw error;
    }
  }
  async getAccount(){
    try{
      return await this.Account.get();
    }catch(error){
      console.log("Appwrite Service :: getAccount :: error",error);
    }
    return null;
  }
  async Logout(){
    try{
        await this.Account.deleteSessions();

    }catch(error){
        console.log("Appwrite Servise :: Logout :: error",error);
    }
  }
 
};
 const appService = new AppService();

export default appService;