import React from 'react';
import {Link} from 'react-router-dom';

class CreateProducts extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            name_p:"",
            reference:"",
            price:"",
            weight_p:"",
            category:"",
            stock:"",
            created_data:""
        };
    }

    changeValue= (e) => {
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({ state });
    }

    sendData = (e) => {
        e.preventDefault();
        const {
            name_p,
            reference,
            price,
            weight_p,
            category,
            stock,
            created_data
        }=this.state;
        
        var dataSending = {
            name_p:name_p,
            reference:reference,
            price:price,
            weight_p:weight_p,
            category:category,
            stock:stock,
            created_data:created_data
        }


        fetch("http://localhost/products/?insert=1", {
            method:"POST",
            body:JSON.stringify(dataSending)
        })
        .then( response => response.json() )
        .then(( dataResponse ) => { 
            console.log( dataResponse );

            

            this.props.history.push("/");
             
            // this.setState({ loadedData:true, products:dataResponse })
        } )
        .catch( console.log )
    }

    render() { 

        const {
            name_p,
            reference,
            price,
            weight_p,
            category,
            stock,
            created_data
        }=this.state;

        return (
            <div className="card">
                <div className="card-header">
                    <h4>Productos</h4>
                </div>
                <div className="card-body">
                   <form onSubmit={this.sendData}>
                        {/* name_p */}
                        <div className="form-group">
                          <label htmlFor="">Nombre del prodcuto</label>
                          <input type="text" name="name_p" id="name_p"  onChange={this.changeValue} value={name_p} className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe el nombre del producto</small>
                        </div>
                        {/* reference */}
                        <div className="form-group">
                          <label htmlFor="">Referencia del prodcuto</label>
                          <input type="text" name="reference" id="reference" onChange={this.changeValue} value={reference} className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe la referencia del producto</small>
                        </div>
                        {/* price */}
                        <div className="form-group">
                          <label htmlFor="">Precio del prodcuto</label>
                          <input type="text" name="price" id="price" onChange={this.changeValue} value={price} className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe el precio del producto</small>
                        </div>
                        {/* weight_p */}
                        <div className="form-group">
                          <label htmlFor="">Peso del prodcuto</label>
                          <input type="text" name="weight_p" id="weight_p" onChange={this.changeValue} value={weight_p} className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe el peso del producto</small>
                        </div>
                        {/* category */}
                        <div className="form-group">
                          <label htmlFor="">Categoria del prodcuto</label>
                          <input type="text" name="category" id="category" onChange={this.changeValue} value={category} className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe la categoria del producto (Alimento/Bebida)</small>
                        </div>
                        {/* stock */}
                        <div className="form-group">
                          <label htmlFor="">Stock del prodcuto</label>
                          <input type="text" name="stock" id="stock" onChange={this.changeValue} value={stock} className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe el stock del producto</small>
                        </div>
                        {/* created_data */}
                        <div className="form-group">
                          <label htmlFor="">Fecha de creación del prodcuto</label>
                          <input type="date" name="created_data" id="created_data" onChange={this.changeValue} value={created_data} className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe la fecha de creacióndel producto</small>
                        </div>
                        {/* Buttons actions */}
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success"> Agregar nuevo producto</button>
                            <Link to={"/"} className="btn btn-dark">Cancelar</Link>
                        </div>
                   </form>
                </div>
                <div className="card-footer text-muted">    
                </div>
            </div>
         );
    }
}
 
export {CreateProducts} ;