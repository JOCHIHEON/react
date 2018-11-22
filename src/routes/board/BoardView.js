import React from 'react';
import {Input} from 'mdbreact';
import {Card, CardHeader,} from 'mdbreact';
import {maindiv} from 'mdbreact';
import './BoardWrite.css';
import './BoardView.css';
import Comment from'./Comment';
const body = () => {
    return(
<div id="maindiv" style={maindiv} >
   <div>
       <div>
       <span><p>조회수 : </p><p>좋아요 : </p>
       <p>날짜 : </p></span>
       </div>
       <Card style={{width: '1000px', marginTop: '1rem',height:'100px'}}>
       <CardHeader tag="h3"><Input disabled/></CardHeader>
       </Card>
       <Card  style={{width: '1000px',height:'700px'}}>
    <p id="text" disabled/>
</Card>
    </div>
    <div id="commenttop">
        <h3>댓글</h3>
    <div id="commentmiddle" >
        <Comment/>
    </div>
    <div>
        
    </div>
    </div>
</div>

    )
}; export default body;
