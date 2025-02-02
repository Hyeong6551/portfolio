import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import '../css/pages.css';

export default function BList(){
    // data.json 리스트 불러오기
    let logo = "Portfolio";
    let [user, setUser] = useState(null);
    function getUser(){
        axios.get('/user')
            .then( (response)=>{setUser(response.data)} )
            .catch( (error)=>{console.error(error)} )
    }
    useEffect(()=>{getUser()},[])

    const navigate = useNavigate();
    const goDetail = (no) => navigate('/board/detail/' + no);

    // table 클릭 시 상세보기

    return(
        <>

        <h3 className="mt-5" style={{fontWeight:"bolder"}}>{logo}</h3>

        <div className="container my-5">
            <div className="containerBox">
                <table className="table table-hover">
                    <caption>hyeong's tables</caption>
                    <thead className="table table-primary">
                        <tr>
                            <th scope="col" style={{width:"10%"}}>번호</th>
                            <th scope="col" style={{width:"50%"}}>제목</th>
                            <th scope="col" style={{width:"25%"}}>작성자</th>
                            <th scope="col" style={{width:"15%"}}>등급</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        user != null && user.map((li, index)=>(
                        <tr key={li.id} onClick={ ()=>{goDetail(li.id)} }>
                            <td>{index+1}</td>
                            <td>{li.title}</td>
                            <td>{li.name}</td>
                            <td>{li.grade}</td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>
                <div className="text-end my-5">
                    <Link to='/board/write' className="btn btn-primary">글쓰기</Link>
                </div>
            </div>
        </div>
        </>
    )
}