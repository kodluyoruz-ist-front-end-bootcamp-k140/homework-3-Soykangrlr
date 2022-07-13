import React from "react";
import { useAppContext } from "../../context/context"
function Post({data,loading}) {
  const {state } = useAppContext()
  //Func componenet ile Post Tablo
 
  const renderBody = () => {
    return (
        <>
            {loading ? <h3>"Loading..."</h3> :
              <tbody   >
               { data.slice(0,20).map((item, i) => (
                  
                        <tr key={i}>
                            <th scope="row">{item.id}</th>
                           <td >{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                  
                ))}
                </tbody>
            }
        </>
    )
}
  return (
    <>
    {/* Contexten Gelene State göre Yazı rengi değitirildi */}
      <table className={`table table-bordered table-sm ${state.style.color}`} >
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">İçerik</th>
          </tr>
        </thead>
     
          {renderBody()}
     
      </table>
    </>
  );
  
}
export default Post;
