import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/pages.css';

export default function BDetail(){
    const { id } = useParams()
    const [detail,setDetail] = useState({ })
    async function getDetail () {
        await axios.get(`/user/${id}`)
                .then( (response)=>{setDetail(response.data)} )
                .catch( (error)=>{console.error(error)} )
    }

    useEffect(()=>{getDetail()},[])
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col'>No</div>
                <div className='col'>{detail.id}</div>
                <div className='col'>name</div>
                <div className='col'>{detail.name}</div>
                <div className='col'>age</div>
                <div className='col'>{detail.age}</div>
            </div>
            <div className='row'>
                <div className='col'>Title</div>
                <div className='col'>{detail.title}</div>
            </div>
            <div className='row'>
                <div className='col'>{detail.content}</div>
            </div>
        </div>
        <div className='bss'>
            <Link to={'/board/list'} className='btn btn-primary me-2'>리스트</Link>
            <Link to={'/board/list'} className='btn btn-danger me-2'>삭제</Link>
        </div>
        </>
    )
}
