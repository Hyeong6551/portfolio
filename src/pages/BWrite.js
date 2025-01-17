import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function BWrite(){
    let [inputs,setInputs] = useState({name:'', title:'',age:''});

    const btnWrite = () => {
        const {name, title ,age} =inputs
        axios.post('/user',inputs)
            .then((response)=>{alert("글쓰기에 성공하셨습니다.");})
            .catch((error)=>{console.error(error)})
    }

    const navigate = useNavigate();
    const goList = navigate('/board/list')
    return(
        <>
        <form>
            <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="Bname"
                    onChange={function(e){
                        setInputs({ ...inputs, [e.target.name]:e.target.value})
                    }}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="Btitle"
                    onChange={function(e){
                    setInputs({ ...inputs, [e.target.age]:e.target.value})
                }}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">age</label>
                <input type="text" className="form-control" id="age" name="Bage"
                    onChange={function(e){
                        setInputs({ ...inputs, [e.target.age]:e.target.value})
                    }}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">content</label>
                <textarea className="form-control" id="content" name="Bcontent" style={{resize:"none", height:"100px"}}/>
            </div>
            <div className="text-end">
                <Link to='/board/list' className="btn btn-primary mx-2">리스트</Link>
                <button onClick={btnWrite} className="btn btn-primary">글쓰기</button>
            </div>
        </form>
        </>
    )
}