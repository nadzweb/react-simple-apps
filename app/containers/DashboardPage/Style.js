import styled from 'styled-components';

export const BoardWrapper = styled.div`
  border: 1px solid #ccc;
  min-height: 150px;
  div.board-box {
    border-right: 1px solid #ccc;
  }
  div.title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    button {
      font-size: 20px;
      padding: 5px;
      line-height: 10px;
      float: right;
      margin-top: 5px;
      font-weight: bold;
    }
  }

  div.tasks {
    min-height: 250px;
  }
  div.board-box-doing, div.board-box-done {
    border: 2px dashed #aaa;
    min-height: 50px;
  }
`;

export const AddTaskForm = styled.form`
  background: #ddd;
  font-size: 12px;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  input {
    width: 100%;
    border: 1px solid #ccc;
    background:#eaeaea;
  }
  textarea {
    border: 1px solid #ccc;
    width: 100%;
    margin-top: 10px;
    min-height: 60px;
    background:#eaeaea;
  }
`;

export const Form = styled.form`
  padding: 10px 15px;
  background-color: #eaeaea;
`;
