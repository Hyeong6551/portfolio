import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import '../css/MyMain.css'

export default function BList(){
    // data.json 리스트 불러오기
    let logo = "Portfolio";
    let [user, setUser] = useState();
    function getUser(){
        axios.get('/user')
            .then( (response)=>{setUser(response.data)} )
            .catch( (error)=>{console.error(error)} )
    }
    useEffect(()=>{getUser()},[])

    const navigate = useNavigate();
    const goDetail = (id) => navigate('/board/detail/' + id);

    // table 클릭 시 상세보기

    return(
        <>
        <h3 className="mt-5" style={{fontWeight:"bolder"}}>{logo}</h3>
        <div className="container my-5">
            <table className="table table-hover">
                <caption>2025-01-13 조세형</caption>
                <thead className="table table-dark">
                    <tr>
                        <th scope="col" style={{width:"10%"}}>NO</th>
                        <th scope="col" style={{width:"45%"}}>TITLE</th>
                        <th scope="col" style={{width:"15%"}}>NAME</th>
                        <th scope="col" style={{width:"25%"}}>AGE</th>
                    </tr>
                </thead>
                <tbody>
                {
                    user != null && user.map((li, index)=>(
                    <tr key={li.id} onClick={ ()=>{goDetail(li.id)} }>
                        <td>{index+1}</td>
                        <td>{li.name}</td>
                        <td>{li.name}</td>
                        <td>{li.age}</td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        <div className="text-end my-5">
            <Link to='/board/write' className="btn btn-primary">글쓰기</Link>
        </div>
        </>
    )
}