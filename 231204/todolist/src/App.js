
import './App.css';
import React, { useState } from 'react';
<link rel="stylesheet" href="style.css"></link>


// Todolist 컴포넌트 정의
function TodoList() {
  // 할 일 목록
  const [todos, setTodos] = useState([]);

  // 입력 텍스트
  const [inputText, setInputText] = useState('');

  // 할 일을 추가하는 함수 addTodo
  const addTodo = () => {
    if (!inputText) {
      alert('내용을 입력해 주세요!');
    }
    else {
      setTodos([...todos, inputText]);
      setInputText(''); // 입력창 초기화
    }
  };

  // 할 일을 클릭하면 취소선 표시하고 한 번 더 클릭하면 목록에서 삭제
  const TodoClick = (index) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      // 만약 할 일에 이미 취소선이 있으면 배열에서 제거
      if (newTodos[index].type === 'del') {
        newTodos.splice(index, 1);      // 배열에서 요소를 삭제하는 함수
      }
      // 그렇지 않으면 취소선 긋기
      else { 
        newTodos[index] = (
          <del style={{ fontStyle: 'italic', color: 'darkgray' }}>
            {prevTodos[index]}
          </del>
        );
      }
      return newTodos;
    }
  );}

  return (
    <div id='div1'>
      <h3>오늘의 할 일</h3>
      <div>
        <input
          type="text"
          value={inputText}
          placeholder="할 일을 입력하세요"
          // 사용자가 입력 필드의 내용을 변경할 때 발생하는 이벤트
          onChange={(e) => setInputText(e.target.value)}
        />
        <input type="button" value="+" onClick={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <div id='todo' key={index} onClick={() => TodoClick(index)}>
              {todo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
