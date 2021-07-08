import React from 'react';

     function Header() {
          
        return (
            <>  
            <a href="Hello.com">Hello world</a>
             <h2>  Welcome to Header component in Another File </h2> 
            </> 
        );
    }

    export function Sidebar(){ // it is a example in specafic functional component exporting.
        return (
            <div>
                <h1>Welcome to the sidebar component in Header.js File</h1>
            </div>
        );

    }

    export default Header; // if you want to access the any component in another to first export the component. then call the component in another file.
    // export is nessacery if component in define in another file.