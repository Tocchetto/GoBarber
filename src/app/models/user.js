import Squelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Squelize.STRING,
        password_hash: Squelize.STRING,
        provider: Squelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
