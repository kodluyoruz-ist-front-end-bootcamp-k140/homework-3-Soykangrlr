import { useState, useEffect } from "react";
import Post from "./posts/postFn";
import Todos from "./todos/todosFn";

//Post Todos Seçim İşlemleri Yapıldı
function Index() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
    const [activeUrl, setActiveUrl] = useState("post");

    useEffect(() => {
        loadData(url);
    }, []);
    useEffect(() => {
        loadData(url);
    }, [url]);
  
    const loadData = (url) => {
        setLoading(true);
        fetch(url)
            .then((x) => x.json())
            .then((response) => {
                setData(response);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
                setLoading(false);
            });
    };

    const renderTable = () => {
      return  <>
        <div className="btn-group tabs" role="group">
        <button
            className={activeUrl === "post" ? "btn btn-outline-success active" : "btn btn-outline-success"}
            onClick={() => {
                setUrl("https://jsonplaceholder.typicode.com/posts")
                setActiveUrl("post")
            }}

        >
            Post
        </button>
        <button
            className={activeUrl === "todos" ? "btn btn-outline-success active" : "btn btn-outline-success"}
            onClick={() => {
                setUrl("https://jsonplaceholder.typicode.com/todos")
                setActiveUrl("todos")
            }}
        >
            Todos
        </button>
    </div>
        <div className="container">
        {activeUrl == "post" ? (
            <Post data={data} loading={loading} />
        ) : (
            <Todos data={data} loading={loading} />
        )}
     </div>
     </>
    }
    return (
        <div >
          
            {renderTable()}

        </div>
    );
}

export default Index;
