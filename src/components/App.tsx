import { ChangeEvent, useState, useCallback, FC } from 'react';
import { MemoList } from './MemoList';
import { useMemoList } from '../hooks/useMemoList';

export const App:FC = () => {
  const {memos, addTodo, deleteTodo} = useMemoList();
  
  const [text, setText] = useState("");

  const onChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => setText(e.target.value), []);

  const onClickAddMemo = () => {
    addTodo(text);
    setText("");
  }

  const onClickDeleteMemo = useCallback((index: number) => {
    deleteTodo(index);
  }, [deleteTodo]);

  return (
    <>
      <h1 className="text-4xl font-bold my-4">簡単メモアプリ</h1>

      <input 
        type="text" 
        value={text} 
        onChange={onChangeText} 
        className="m-4 py-2 border border-black"/>
      <button type="button" onClick={onClickAddMemo} className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white">追加</button>
      <MemoList memos={memos} onClickDeleteMemo={onClickDeleteMemo}/>
    </>
  );
}

export default App;
