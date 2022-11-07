import { EventEmitter } from 'node:events';
// let emiter = new EventEmitter();

class Logger extends EventEmitter {
  event(obj) {
    this.on('user_registration', (obj) => {
      let { name, surname } = obj;
      console.log(`- user ${name + ' ' + surname} has been successfully registered -`);
    })
  }
}

let logger = new Logger();

let user = {
  name: 'Johny',
  surname: 'Depp',
};

logger.event();
logger.emit('user_registration', user);

// console.log('- Emmiter -', emiter);

// emiter.on('user_registration', (obj) => {
//   let { name, surname } = obj;
//   console.log(`- user ${name + ' ' + surname} has been successfully registered -`);
// });

// console.log('- Logger -', Logger.event({}));


// Logger.emit('user_registration', {
//   name: 'Johny',
//   surname: 'Depp',
// });
