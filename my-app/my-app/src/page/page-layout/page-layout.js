import React from "react";
import Navigations from './navigations/navigations';
import Footer from './footer/footer'

export default function PageLayout ({children}){ 
   return (
     <React.Fragment>
        <Navigations/>
         <div>{children}</div>
        <Footer/> 
     </React.Fragment>
   )
}