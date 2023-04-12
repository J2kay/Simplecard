import { react } from '@babel/types';
import React from 'react';



class Description extends React.Component{
    render(){
    return (
        <div>
            <p>{this.props.about}</p>
        </div>
    )
    }
}
export default Description