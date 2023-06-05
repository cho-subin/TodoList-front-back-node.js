import React, { useState } from 'react';
import axios from 'axios';
import '../css/Input.css';

const Input = () => {

    const [sendList, setSendList] = useState();

    console.log('sendList', sendList);

    let text = (e) => {
        setSendList({
            content : e,
            check : false
        });
    }

    // 여기에 axios 통신 - post
    const addBtn = async () => {
        if (sendList.content !== ''){
            const res = await axios.post('/api/lists/post', sendList)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
            console.log('res',res);
            alert('to do list에 추가되었습니다.')
        }
        else if (sendList.content === ''){
            alert('to do list를 작성해주세요.');
            return;
        }

        setSendList({
            content: '',
            check: false
        })
    }

    return (
        <div className="write-box">
            <input type="text" className="text-basic" onChange={(e)=>text(e.target.value)}/>
            <button type="button" id="btnAdd" onClick={() => addBtn()}>추가</button>
        </div>
    )
}

export default Input;
