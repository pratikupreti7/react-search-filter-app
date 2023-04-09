import React from 'react';
import ListItem from './ListItem';
import './styles.css';

const List = ({ list }) => (
  <>
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </>
);

export default List;
