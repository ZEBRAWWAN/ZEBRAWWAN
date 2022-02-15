import React, { Component } from 'react';
import Data from './base_scripts.json';


class ImprtJsonData extends Component {
     
    render() { 
        return (
            
            <div>
                <h4>Available Modules</h4>
                {Data.map(post => {

                    return(
                        <div key={post.id}>                        
                        <td> {post.name} </td>
                        </div>
                    )
                }                      
                )             
                
                }


            </div>
        );

    }
}
 
export default ImprtJsonData;