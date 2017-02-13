import React, { PropTypes } from 'react';
import {filter} from 'lodash';
import styled from 'styled-components';

const DIV = styled.div`
  border: 1px solid #eee;
  background: #ffc;
  width: 200px;
  min-height: 100px;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  margin-bottom: 10px;
  padding:5px 10px;
  position: relative;
  div{
   font-size:12px;
  }
`;
const ButtonWrap = styled.div`
  position:absolute;
  right: 5px;
  bottom:5px;
  button {
    padding: 0px 10px;
  }
`;

export function drag(evt) {
  evt.dataTransfer.setData('text', evt.target.id);
}

function Task(props) {
  
  if(props ) {
    if(props.title) {
      return (
      <DIV id={props.id} draggable="true" onDragStart={drag}>
        <div>
          <strong>{props.title}</strong>
          <br/>{props.description}
        </div>
        <ButtonWrap>
          <button className="btn btn-danger" onClick={() => props.handleRemove(props.id)}><i className="fa fa-trash-o"></i></button>
        </ButtonWrap>
      </DIV>
      )
    }
  }
  return null;
};

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Task