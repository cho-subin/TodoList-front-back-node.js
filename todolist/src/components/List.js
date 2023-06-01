import React from 'react';
import '../css/List.css';

const List = () => {
  return (
      <table class="list-table">
          {/* <colgroup> : table의 컬럼(td태그)에 적용할 스타일 width, background를 미리 적용 가능한 태그 */}
          <colgroup>
              <col width="10%" />
              <col width="90%" />
          </colgroup>

          {/* <thead> : HTML 테이블에서 헤더 콘텐츠(header content)들을 하나의 그룹으로 묶을 때 사용
                각 영역(header, body, footer)을 명시하기 위해 <tbody>, <tfoot> 요소와 함께 사용 */}
          <thead>
              <tr>
                  <th>check</th>
                  <th>To do List</th>
              </tr>
          </thead>
          <tbody id="listBody">
              <tr>
                  <td>
                      <input type="checkbox" class="btn-chk" />
                  </td>
                  <td>HTML + CSS 공부하기</td>
              </tr>
              <tr>
                  <td>
                      <input type="checkbox" class="btn-chk" />
                  </td>
                  <td>JavaScript 공부하기</td>
              </tr>
              <tr>
                  <td>
                      <input type="checkbox" class="btn-chk" />
                  </td>
                  <td>
                      헬스 하기
                  </td>
              </tr>
          </tbody>
      </table>
  )
}

export default List
