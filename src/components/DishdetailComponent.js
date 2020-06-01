import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

function RenderDish({dish}){
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

function RenderComments({dish}){
        var months = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
        var d0 = new Date(dish.comments[0].date)
        var d1 = new Date(dish.comments[1].date)
        var d2 = new Date(dish.comments[2].date)
        var d3 = new Date(dish.comments[3].date)
        var d4 = new Date(dish.comments[4].date)
           return(
               <div>
                   <h4>Comments</h4>
                   <ul className="list-unstyled">
                       <li>{dish.comments[0].comment}</li><br></br>
            	        <li>-- {dish.comments[0].author}  {months[d0.getMonth()]} {d0.getDate()} , {d0.getFullYear()}</li>
                   </ul>
                   <ul className="list-unstyled">
                       <li>{dish.comments[1].comment}</li><br></br>
                       <li>-- {dish.comments[1].author}  {months[d1.getMonth()]} {d1.getDate()} , {d1.getFullYear()}</li>
                   </ul>
                   <ul className="list-unstyled">
                       <li>{dish.comments[2].comment}</li><br></br>
                       <li>-- {dish.comments[2].author}  {months[d2.getMonth()]} {d2.getDate()} , {d2.getFullYear()}</li>
                   </ul>
                   <ul className="list-unstyled">
                       <li>{dish.comments[3].comment}</li><br></br>
                       <li>-- {dish.comments[3].author}  {months[d3.getMonth()]} {d3.getDate()} , {d3.getFullYear()}</li>
                   </ul>
                   <ul className="list-unstyled">
                       <li>{dish.comments[4].comment}</li><br></br>
                       <li>-- {dish.comments[4].author}  {months[d4.getMonth()]} {d4.getDate()} , {d4.getFullYear()}</li>
                   </ul>
               </div>
           )
    }

    const Dishdetail = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments dish={props.dish}/>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

export default Dishdetail;