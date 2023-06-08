import axios from 'axios';
import React from 'react';
import '../css/Buttons.css';

const Buttons = ({ onListUpdated, lists }) => {

    const deleteLast = async() => {
        if(lists.length > 0){
            const id = lists[lists?.length - 1]?._id;

            await axios.delete(`/api/lists/delete/${id}`)
                .then((res) => {
                    console.log(res);
                    alert('마지막 항목이 삭제되었습니다.');
                    onListUpdated();
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        
    }
    
    const deleteAll = async() => {
        await axios.delete('/api/lists/delete')
        .then((res)=>{
            console.log(res);
            alert('모든 항목이 삭제되었습니다.');
            onListUpdated();
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className="btn-area">
            <button type="button" id="btnDelLast" onClick={deleteLast}>마지막 항목 삭제</button>
            <button type="button" id="btnDelAll" onClick={deleteAll}>전체 삭제</button>
        </div>
    )
}

export default Buttons
