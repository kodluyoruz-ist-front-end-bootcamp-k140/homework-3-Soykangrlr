
import React, { Component } from 'react'

export default class PostCls extends Component {
//Class componenet ile Post Tablo
 renderBody = () => {
    return (
        <>
            {this.props.loading ? <h3>"Loading..."</h3> :
             <tbody  >
               { this.props.data.slice(0,20).map((item, i) => (
                   
                        <tr key={i}>
                            <th scope="row">{item.id}</th>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                   
                ))}
                </tbody>
            }
        </>
    )
}

  render() {
  return  <>
  {/* Prorps ile Yazı rengi Değitirildi */}
    <table className="table table-bordered" style={{color:this.props.color}}>
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
           <th scope="col">İçerik</th>
        </tr>
      </thead>
   
        {this.renderBody()}
   
    </table>
  </>
  }
}
