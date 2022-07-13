
import React, { Component } from 'react'


export default class TodoCls extends Component {
   
    constructor(props) {
        super(props)
    }

    renderBody = () => {
      
        return (
            <>
                {this.props.loading ? <h3>"Loading..."</h3> :
                 <tbody >
                   { this.props.data.slice(0, 20).map((item, i) => (
                       
                            <tr key={i}  >
                                <th>{item.id}</th>
                                <td>{item.title}</td>
                                <td>{item.comleted ? "Tamamlandı" : "Yapılacak"}</td>
                               
                            </tr>
                       
                    ))} </tbody>
                }
            </>
        )
    }

    render() {
      
     return   <>
            <table className="table" style={{color:this.props.color}} >
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Durum</th>
                       
                    </tr>
                </thead>

                {this.renderBody()}

            </table>
        </>
    }
}
