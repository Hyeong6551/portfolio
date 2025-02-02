import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function BWrite(){
    const navigate = useNavigate();
    let [inputs, setInputs] = useState({name:'', title:'',contnet:'',age:''});

    const btnWrite = () => {
        const {name, title, contnet, age} = inputs

        axios.post('/user', inputs)
            .then( (response)=>{alert("글쓰기에 성공하셨습니다."); navigate('/board/list')} )
            .catch( (error)=>{console.log(error)} )
        setInputs({name:'', title:'',contnet:'',age:''})
    }

    const btnList = () => navigate('/board/list')

    function inputWrite(e){
        setInputs({ ...inputs , [e.target.name] : e.target.value})
    }

    return(
        <>
        <form>
            <h3 className="mt-5" style={{fontWeight:"bold"}}>WRITE</h3>
            <div className="containerBox">
                <div className="mb-3 mt-3">
                    <label htmlFor="bname" className="form-label">Name</label>
                    <input type='text' className='form-control' id='bname' name='name'
                        value={ inputs.name }
                        onChange={inputWrite}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="btitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="btitle" name="title"
                        value={ inputs.title }
                        onChange={inputWrite}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="bage" className="form-label">age</label>
                    <input type="text" className="form-control" id="bage" name="age"
                        value={ inputs.age }
                        onChange={inputWrite}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="bcontent" className="form-label">content</label>
                    <textarea className="form-control" id="bcontent" name="content" style={{resize:"none", height:"100px"}}
                        value={ inputs.content }
                        onChange={inputWrite}
                    ></textarea>
                </div>
            </div>
            <div className="text-end">
                <button type="button" onClick={btnList} className="btn btn-primary me-2">리스트</button>
                <button type="button" onClick={btnWrite} className="btn btn-primary me-2">글쓰기</button>
            </div>
        </form>
        </>
    )
}