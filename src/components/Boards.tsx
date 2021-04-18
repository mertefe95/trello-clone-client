import React, { FunctionComponent } from 'react';
import BoardsMainHeader from './layouts/BoardsMainHeader';
import BoardsMainSidebar from './layouts/BoardsMainSidebar';

const Boards: FunctionComponent = function () {
  return (
    <div className="boards-div">
      <BoardsMainHeader />
      <div>
        <BoardsMainSidebar />
        <main className="boards-main">asd</main>
      </div>
    </div>
  );
};

export default Boards;
