import React , { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DISHES } from '../shared/dishes';

class DishDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            sele : DISHES
        }
    }
    renderDish(dish){
        return(
            <div>
                <Card>
                    <CardImg width="100%" src={dish.image}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            
        )
    }
    

    render(){
        return(
            <div>
                {this.renderDish(this.props.selectedDish)}
            </div>
        )
    }
}

export default DishDetail;