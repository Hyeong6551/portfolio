import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function BWrite(){
    const navigate = useNavigate();
    let [inputs, setInputs] = useState({name:'', title:'',content:'',grade:''});

    const btnWrite = () => {
        const {name, title, content, grade} = inputs
        if (!title || !content || !name || !grade ){
            alert('빈칸입니다.')
            return;
        } 

        axios.post('/user', inputs)
            .then( (response)=>{alert("글쓰기에 성공하셨습니다."); navigate('/board/list')} )
            .catch( (error)=>{console.log(error)} )
        setInputs({name:'', title:'',content:'',grade:''})
    }

    const btnList = () => navigate('/board/list')

    function inputWrite(e){
        setInputs({ ...inputs , [e.target.name] : e.target.value})
    }

    return(
        <>
        <form>
            <h3 className="mt-5" style={{fontWeight:"bold"}}>글쓰기 페이지</h3>
            <div className='containerBox'>
                <div className="mb-3 mt-3">
                    <label htmlFor="bname" className="form-label">이름</label>
                    <input type='text' className='form-control' id='bname' name='name'
                        value={ inputs.name }
                        onChange={inputWrite}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="btitle" className="form-label">제목</label>
                    <input type="text" className="form-control" id="btitle" name="title"
                        value={ inputs.title }
                        onChange={inputWrite}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="bage" className="form-label">등급</label>
                    <input type="text" className="form-control" id="bgrade" name="grade"
                        value={ inputs.grade }
                        onChange={inputWrite}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="bcontent" className="form-label">내용</label>
                    <textarea className="form-control" id="bcontent" name="content" style={{resize:"none", height:"200px"}}
                        value={ inputs.content }
                        onChange={inputWrite}
                    ></textarea>
                </div>
                <div className="text-end">
                    <button type="button" onClick={btnList} className="btn btn-primary me-2">리스트</button>
                    <button type="button" onClick={btnWrite} className="btn btn-primary me-2">글쓰기</button>
                </div>
            </div>
        </form>
        </>
    )
}