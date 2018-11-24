import React from 'react';
import { Button, Card,CardTitle} from 'mdbreact';
import './Comment.css';
const body = () => {
    return(
<div id="commentmaindiv" >
   <div>
       <Card style={{width: '1000px',height:'200px'}}>
       <p id="username">회원아이디 값 받을곳</p>
    <textarea id="write" placeholder="댓글작성은 최대 200자 까지 가능합니다."/>
    <span id="comment__count" role="region" aria-live="polite" aria-label="글자수 제한">0/200</span>
</Card>
</div>
<div id="recommnetdiv">
<Button id="commentwrite"color="dark">댓글 작성</Button>
</div>




</div>
    )
}; export default body;
