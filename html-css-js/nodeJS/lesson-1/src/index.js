import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/hello', (req, res) => {
  console.log('- hello -');
  res.send('Test page');
});


app.listen(3000, () => {
  console.log('- Port is running on: ', 3000);
});

// создать ещё один эндпоинт
// ответить json (в res.send() )
// найти в доках (!)



