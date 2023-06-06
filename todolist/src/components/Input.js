import React, { useState } from 'react';
import axios from 'axios';
import '../css/Input.css';

const Input = ({ onListUpdated }) => {

    const [sendList, setSendList] = useState({
        content: '',
        check: false
    });

    // console.log('sendList', sendList);

    const text = (e) => {
        setSendList({
            ...sendList,
            content: e
        });
    };

    const addBtn = async () => {
        if (sendList.content !== '') {
            await axios
                .post('/api/lists/post', sendList)
                .then((res) => {
                    console.log(res);
                    onListUpdated(); // 리스트 업데이트 후 콜백 호출
                })
                .catch((err) => {
                    console.log(err);
                });

            alert('To-Do List에 추가되었습니다.');

            setSendList({
                content: '',
                check: false
            });
        } else {
            alert('To-Do List를 작성해주세요.');
        }
    };

    return (
        <div className="write-box">
            <input type="text" className="text-basic" onChange={(e) => text(e.target.value)} value={sendList.content}/>
            <button type="button" id="btnAdd" onClick={() => addBtn()}>추가</button>
        </div>
    )
}

export default Input;
