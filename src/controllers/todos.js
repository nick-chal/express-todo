import { Router } from 'express';

import * as todoService from '../services/todo';
import { runInNewContext } from 'vm';

let router = Router();

router.get('/', (req, res, next) => {
  todoService
    .getAllTodos()
    .then(todo => res.json(todo))
    .catch(err => next(err));
});

export default router;
