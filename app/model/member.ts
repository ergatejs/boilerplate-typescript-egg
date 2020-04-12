import { Application } from 'egg';
import { Model, DataTypes } from 'sequelize';

export class Member extends Model {
  public id!: number;
  public email!: string;
  public avatar: string;
  public role: string;
  public salt: string;
  public hash: string;
}

export default (app: Application) => {

  Member.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    email: DataTypes.TEXT,
    avatar: DataTypes.TEXT,
    role: DataTypes.TEXT,
    salt: DataTypes.TEXT,
    hash: DataTypes.TEXT,
  }, {
    sequelize: app.model,
  });

  return Member;
};
