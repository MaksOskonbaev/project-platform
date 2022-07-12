import React from "react";

function Layout( {children} ) {
  return ( 
    <div>
       <div className="container">
        {children}
      </div>
    </div>
   );
}

export default Layout;