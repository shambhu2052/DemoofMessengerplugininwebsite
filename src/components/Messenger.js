import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

 export default class  Messenger extends Componnets  {
    render(){
        return (
            <div>
                   <FacebookProvider appId="659173229438560" chatSupport>
        <CustomChat pageId="110229715470852" minimized={true}/>
      </FacebookProvider>  
            </div>
          );
        }
    }
  

