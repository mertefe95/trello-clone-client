import React, { FunctionComponent } from 'react';
import BoardsMainHeader from './layouts/BoardsMainHeader';
import BoardsMainSidebar from './layouts/BoardsMainSidebar';

const Boards: FunctionComponent = function () {
  return (
    <div className="baords-div">
      <BoardsMainHeader />
      <div>
        <BoardsMainSidebar />
        <main></main>
      </div>
    </div>
  );
};

export default Boards;
