import { useState,useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/page.css';

export default function BDetail(){
    // 글 번호 가져오기
    const { id } = useParams()
    const [detail,setDetail] = useState({ })
    async function getDetail () {
        await axios.get(`/user/${id}`)
                .then( (response)=>{setDetail(response.data)} )
                .catch( (error)=>{console.error(error)} )
    }

    const navigate = useNavigate()
    const btnDelete = () => {
        if ( window.confirm('게시글을 삭제하시겠습니까?')) {
            axios.delete(`/user/${id}`)
                .then((response)=>{alert("삭제가 완료되었습니다.");})
                .catch((error)=>{console.error(error)})
        }
    }

    useEffect(()=>{getDetail()} , [])
    return(
        <>
        <div className='container'>
            <div className='containerBox' id='detailBox'>
                <div className='row' id='box1'>
                    <div className='col'>번호</div>
                    <div className='col'>{detail.id}</div>
                    <div className='col'>작성자</div>
                    <div className='col'>{detail.name}</div>
                    <div className='col'>등급</div>
                    <div className='col'>{detail.grade}</div>
                </div>
                <div className='row' id='box2'>
                    <div className='col col-2'>제목</div>
                    <div className='col'>{detail.title}</div>
                </div>
                <div className='row' id='box2'>
                    <div className='col'>내용</div>
                </div>
                <div className='row' id='box3'>
                    
                    <div className='col'>{detail.content}</div>
                </div>
            </div>
        </div>
        <div className='btnBox'>
            <Link to={'/board/list'} className='btn btn-primary me-2'>리스트</Link>
            <Link to={'/board/list'} className='btn btn-danger me-2' onClick={btnDelete}>삭제</Link>
        </div>
        </>
    )
}
