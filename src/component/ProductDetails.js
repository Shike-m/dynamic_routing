import React from 'react';
import { Card, CardMedia,CardContent,Typography } from '@material-ui/core';
import RestAPI from '../api/RestAPI';


class ProductDetails extends React.Component{
    state = {
        product:{}
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        RestAPI.getProductDetails(this.props.match.params.id, this.setProductDetails);
    }
    setProductDetails = (data) => {
        this.setState({
            product:data
        })
    }
    render() {
        let item = this.state.product;
        return (
            <div>
                <h1>Details of Product</h1>
                <Card>
                    <CardMedia
                        component="img"
                        alt={item.id}
                        height="300"
                        src={item.image}
                        title={item.title}
                        style={{objectFit:'contain'}}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                            {item.category}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.description}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.price && `Price: $${item.price}`}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default ProductDetails;