import React, { useState } from 'react';
import '../css/Input.css';

const Input = () => {

    const [todoText,setTodoText] = useState('');

    console.log('todoText', todoText);

    let text = (e) => {
        setTodoText(e);
    }

    // 여기에 axios 통신 - post
    const addBtn = () => {

        alert('to do list에 추가되었습니다.')
    }



    return (
        <div className="write-box">
            <input type="text" className="text-basic" onChange={(e)=>text(e.target.value)}/>
            <button type="button" id="btnAdd" onClick={() => addBtn()}>추가</button>
        </div>
    )
}

export default Input
