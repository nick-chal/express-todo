import { Router } from 'express';

import todoController from './controllers/todos';

let router = Router();

router.get('/', (req, res) => {
  res.json({
    text: 'Hello World!@#'
  });
});

router.use('/todo', todoController);

export default router;
