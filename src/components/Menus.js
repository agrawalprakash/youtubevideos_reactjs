import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus=()=> {

    return (
        <ListGroup>
            <Link 
            className="list-group-item list-group-item-action"
            tag="a" 
            to="/" 
            action
            >
                Home
            </Link>
            <Link
             className="list-group-item list-group-item-action" 
            tag="a" 
            to="/add-videos" 
            action
            >
                Add Video
            </Link>
            <Link
             className="list-group-item list-group-item-action" 
            tag="a" 
            to="/view-videos" 
            action
            >
                View Videos
            </Link>
        </ListGroup>

    )

}
export default Menus;
