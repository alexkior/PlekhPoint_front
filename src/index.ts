import 'reflect-metadata';
import express from 'express';
// import { container } from 'tsyringe';
import './configs/di';
// import AuthService from './services/AuthService/authService';

const app = express();
app.use(express.static('client/build'));

// const authService = container.resolve<AuthService>('AuthService');

app.listen(8000, () => {
  console.log('Started success');
  // authService.auth('username', 'password');
});
