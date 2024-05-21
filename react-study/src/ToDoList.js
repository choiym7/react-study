//import logo from './logo.svg';
import './toDoList.css';

function ToDoList() {
  return (
    <div className="toDoList">
      <section>
        <article className="area1">
          <div className="container">
            <input type="text" placeholder="To Do List" className="inputData" />
            <button className="addBtn">추가</button>
          </div>
        </article>
        <article className="area2">
          <ul>
            <li>
              <span className="text">블로그1</span>
              <div>
                <button className="delBtn">삭제</button>
                <button className="modifyBtn">수정</button>
                <button className="completbtn">완료</button>
              </div>
            </li>
            <li>
              <span className="text">블로그2</span>
              <div>
                <button className="delBtn">삭제</button>
                <button className="modifyBtn">수정</button>
                <button className="completbtn">완료</button>
              </div>
            </li>
            <li>
              <span className="text">블로그3</span>
              <div>
                <button className="delBtn">삭제</button>
                <button className="modifyBtn">수정</button>
                <button className="completbtn">완료</button>
              </div>
            </li>
          </ul>
        </article>
      </section>

    </div>
  );
}

export default ToDoList;

