import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
export function Edit() {
    let {id} = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(()=>{
axios.get('http://localhost:4000/api/book/'+id)
.then((res)=>{
    setTitle(res.data.title);
    setCover(res.data.cover);
    setAuthor(res.data.title);
})

.catch((error)=>{console.log(error)});
    },[]);



    const handleSubmit = (e) => {
        e.preventDefault();
const editBook = {
    title:title,
    cover:cover,
    author:author
}
        axios.put('http://localhost:4000/api/book/'+id,editBook)
        .then((res)=>{console.log(res.data);
        navigate('/read');
        
        
        })
        .catch();

    };
    return (
        <div>
            <h1>This is my edit component!</h1>
            <form onSubmit={handleSubmit}>

                <label>edit book Author:</label>
                <input type="Text"
                    className="form-control"
                    value={author}
                    onChange={(e) => {
                        setAuthor(e.target.value)
                    }}></input>





                <label>edit book Cover:</label>
                <input type="Text"
                    className="form-control"
                    value={cover}
                    onChange={(e) => {
                        setCover(e.target.value)
                    }}></input>



                <label>edit book Title:</label>
                <input type="Text"
                    className="form-control"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}></input>



                <input type="submit" value="edit book"></input>


            </form>

        </div>);
}