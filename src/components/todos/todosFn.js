import { useAppContext } from "../../context/context"
function Todos({ data, loading }) {
  const {state } = useAppContext()


  const renderBody = () => {
    
    return (
      <>
        {loading ? (
          <h3>"Loading..."</h3>
        ) :  <tbody >
          {data.slice(0, 20).map((item, i) => (
           
              <tr key={i}>
                <th>{item.id}</th>
                <td>{item.title}</td>
                <td>{item.comleted ? "Tamamlandı" : "Yapılacak"}</td>
               
              </tr>
            
          ))}
          </tbody>
        }
      </>
    );
  };

  return (
    <>
      <table className={`table ${state.style.color}`}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Durum</th>
         
          </tr>
        </thead>

        {renderBody()}
      </table>
    </>
  );
}


export default Todos;
