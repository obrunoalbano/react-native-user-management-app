export class User {
    static schema = {
      name: 'User',
      primaryKey: 'id',
      properties: {
        id: 'int',
        name: 'string',
        email: 'string',
      },
    };
  }