let todos = [
  {
    id: 112,
    text: 'Apple',
    completed: false
  }
];

const fetchAll = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(todos);
    }, 500);
  });

export { fetchAll };
