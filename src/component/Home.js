import React from 'react';
import RestAPI from '../api/RestAPI';
import { GridList, GridListTile } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles={
    paper: {
        display: 'inline-block',
        height: 370,
        padding: 24

    },
    image: {
        maxWidth: 270,
        height: 140,
        width: 140,
        resizeMode:'contain'
    },
    container: {
        alignItems: 'center'
    },
    imageContainer: {
        alignItems:'center'
    }
}
class Home extends React.Component{
    state = {
       products:[] 
    }
    componentDidMount() {
        RestAPI.getHomeList('products',this.loadProducts);
    }
    loadProducts = (data) => {
        this.setState({
            products:data
        })
    }
    enhancePrice = (value,decimals) => {
        if ((Number(Math.round(value + "e" + decimals) + "e-" + decimals).toFixed(decimals).isNaN)) return 0;
        return Number(Math.round(value + "e" + decimals) + "e-" + decimals).toFixed(decimals);
    }
    render() {
        let products = this.state.products;
        return (
            <div>
                <GridList spacing={0} style={styles.container} cols={5}>
                    {
                        products && products.map((product,index) => {
                            return (
                                <GridListTile key={index} style={styles.paper}>
                                    <div style={styles.imageContainer}>
                                        <Link to={`products/${product.id}`}>
                                            <img src={product.image} style={styles.image} alt={product.id}/>
                                        </Link>
                                    </div>
                                    <p>{`Price:$${this.enhancePrice(product.price, 2)}`}</p>
                                </GridListTile>
                            )
                        })
                    }
                </GridList>
            </div>
        )
    }
}

export default Home;