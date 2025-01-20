import { Link } from "react-router-dom";

export default function Error(){
    return(
        <>
        <div style={{color:"red", fontWeight:"bold", marginTop:"4%", fontSize:"44px"}}>존재하지 않은 페이지입니다.</div>
        <Link to={-1} className="btn btn-danger mt-5">돌아가기</Link>
        </>
    )
}