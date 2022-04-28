import React from 'react';
import {Link} from 'react-router-dom';

class ListProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loadedData:false, 
            products:[]
        }
    }

    deleteData = (id) => {
        console.log(id);
        fetch("http://localhost/products/?delete="+id)
        .then( response => response.json() )
        .then(( dataResponse ) => { 
            console.log( dataResponse );
            this.loadData();
        } )
        .catch( console.log )
    }
    loadData (){
        fetch("http://localhost/products/")
        .then( response => response.json() )
        .then(( dataResponse ) => { 
            console.log( dataResponse );
            this.setState({ loadedData:true, products:dataResponse })
        } )
        .catch( console.log )
    }


    componentDidMount(){
        this.loadData();
    }

    render() {
        
        const{loadedData, products}=this.state;
        if(!loadedData) { return(<div>Cargando...</div>); }
        else{
        
            return ( 
                
                <div className="card">
                    <div className="card-header">
                        <Link className="btn btn-success" to={"/crear"}>Agregar producto</Link>
                    </div>
                    <div className="card-body">

                        <h4>Productos</h4>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Referencia</th>
                                <th>Precio</th>
                                <th>Peso</th>
                                <th>Categoría</th>
                                <th>Stock</th>
                                <th>Fecha de creación</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            products.map(
                                (product)=>(
                                    <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name_p}</td>
                                    <td>{product.reference}</td>
                                    <td>{product.price}</td>
                                    <td>{product.weight_p}</td>
                                    <td>{product.category}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.created_data}</td>
                                    <td>
                                        <div className="btn-group" role="group" aria-label="">
                                            <Link className="btn btn-warning" to={"/editar/"+product.id}
                                            >Editar</Link>
                                            <button type="button"  className="btn btn-danger"
                                                onClick={() => this.deleteData( product.id )}
                                            >Borrar</button>
                                        </div>
                                    </td>
                                    </tr>
                                )
                            )
                        }
                        </tbody>
                    </table> 

                    </div>
                    <div className="card-footer text-muted">
                    </div>
                </div>

                );
        }
    }
}
 
export  {ListProducts};