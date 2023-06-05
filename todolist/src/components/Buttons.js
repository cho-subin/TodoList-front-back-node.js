import React from 'react';
import '../css/Buttons.css';

const Buttons = () => {

    const deleteSel = () => {
        // axios delete one
    }
    
    const deleteLast = () => {
        // axios delete last
    }
    
    const deleteAll = () => {
        // axios delete all
    }

    return (
        <div className="btn-area">
            <button type="button" id="DeleteSel" onClick={() => deleteSel()}>선택 삭제</button>
            <button type="button" id="btnDelLast" onClick={() => deleteLast()}>마지막 항목 삭제</button>
            <button type="button" id="btnDelAll" onClick={() => deleteAll()}>전체 삭제</button>
        </div>
    )
}

export default Buttons
