import { Application } from 'egg';
import { Model, DataTypes } from 'sequelize';

class Member extends Model {
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
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: DataTypes.TEXT,
    avatar: DataTypes.TEXT,
    role: DataTypes.TEXT,
    salt: DataTypes.TEXT,
    hash: DataTypes.TEXT,
  }, {
    sequelize: app.model,
    timestamps: false,
  });

  return Member;
};
