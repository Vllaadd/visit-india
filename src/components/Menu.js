import React from 'react';
import {Media} from 'reactstrap';
import './Media.css';

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const menu = this.props.places.map((place) => {
            return(
                <div>

                </div>
            )
        })
        return(
            <div>

            </div>
        )
    }
}

export default Menu;