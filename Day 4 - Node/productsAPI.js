const v_http = require('http');
const v_express = require('express');
const v_app = v_express();
const v_cors = require('cors');
const v_server = v_http.createServer(v_app);
const v_port = 7879;

v_app.use(v_cors);
 jsonParser = v_express.json();
    v_app.use(jsonParser);

var productList = [
        { id: 1, name: 'Pepsi',price:50, availQty:40,isInStock:true },
        { id: 2, name: 'Maggie',price:80, availQty:40,isInStock:true  },
        { id: 3, name: 'Sandwich',price:90, availQty:40,isInStock:false  },        
        { id: 4, name: 'Pizza',price:100, availQty:40,isInStock:true  },        
        { id: 5, name: 'Books',price:500, availQty:40,isInStock:true  },        
        { id: 6, name: 'Headphones',price:1200, availQty:40,isInStock:false  },
    ];

    //get all products
v_app.get('/products', (req, res) => {
    res.send(productList);
});
    //get product by ID
v_app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = productList.find(p => p.id === productId);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send('Product not found');
    }
});

    //get total number of products
v_app.get('/products/show/total',(req,res)=>{
    res.send({totalProducts: productList.length});
});
    //add a new product
v_app.post('/products/add', (req, res) => {
   
    console.log(req.body);
    const newProduct = req.body;    
    newProduct.id = productList.length + 1;
    productList.push(newProduct);
    res.status(201).send(productList);
});






v_server.listen(v_port, () => {
    console.log(`Server running at http://localhost:${v_port}`);
});
