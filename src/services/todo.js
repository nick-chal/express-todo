import * as todoDao from '../dao/todo';

const getAllTodos = () => {
  return todoDao.fetchAll();
};

export { getAllTodos };
