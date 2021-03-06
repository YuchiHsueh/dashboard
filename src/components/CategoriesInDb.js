import React, { Component } from 'react';
import Category  from './Category';
class CategoriesInDb extends Component{
    constructor(props){
		super(props);
		this.state = {
		    categoriesList: [],
            
		}
	} 

	getCategories(){
         fetch("http://localhost:3003/api/categorias")
        .then(r => r.json())
        .then(respuesta =>{ 
            this.setState({categoriesList: respuesta.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
	componentDidMount(){
		this.getCategories()
        
	}
    
    render(){
        let categorias = this.state.categoriesList
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Categorias en la Base de Datos</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    categorias.map((category,index)=>{
                                        return  <Category  {...category}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}}
export default CategoriesInDb;