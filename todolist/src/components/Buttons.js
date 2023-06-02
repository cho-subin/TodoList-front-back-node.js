import React from 'react';
import '../css/Buttons.css';

const Buttons = () => {
    return (
        <div className="btn-area">
            <button type="button" id="DeleteSel">선택 삭제</button>
            <button type="button" id="btnDelLast">마지막 항목 삭제</button>
            <button type="button" id="btnDelAll">전체 삭제</button>
        </div>
    )
}

export default Buttons
