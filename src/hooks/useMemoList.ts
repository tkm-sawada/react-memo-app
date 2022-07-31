import { useCallback, useState } from 'react';

export const useMemoList = () => {
  const [memos, setMemo] = useState<string[]>([]);
  
  const addTodo = useCallback((text: string) => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemo(newMemos);

    console.log("addTodo");
  }, [memos]);

  const deleteTodo = useCallback((index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemo(newMemos);

    console.log("deleteTodo");
  }, [memos]);

  return { memos, addTodo, deleteTodo };
}