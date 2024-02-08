import { Router, json, urlencoded } from 'express';
import {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  removeTodo
} from '../controllers/todos';

const router = Router();

// Middleware for parsing JSON bodies
router.use(json());

// Middleware for parsing URL-encoded bodies
router.use(urlencoded({ extended: true }));

router.get('/api/todos', getTodos);

router.get('/api/todo/:id', getTodo);

router.post('/api/add-todo', addTodo);

router.put('/api/update-todo/:id', updateTodo);

router.delete('/api/remove-todo/:id', removeTodo);

export default router;