import { memo } from 'react';

type Props = {
  memos: string[];
  onClickDeleteMemo: (index: number) => void;
}

export const MemoList = memo<Props>((props) => {
  const { memos, onClickDeleteMemo } = props;

  return (
    <>
      <div className="m-4 p-4 border border-gray-400">
        <h2 className="text-2xl font-bold my-4">メモ一覧</h2>
        <ul className="ml-8 my-4 list-decimal">
          {memos.map((memo, index) => 
            <li key={index} className="my-4">
              <span>{memo}</span>
              <button type="button" onClick={() => onClickDeleteMemo(index)} className="ml-8 px-4 py-2 rounded bg-red-500 hover:bg-red-700 text-white">削除</button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
});
