import { Model, Table, Column, DataType } from 'sequelize-typescript';
interface MeetingInterface {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}
@Table({ tableName: 'users' })
export class Meeting extends Model<Meeting, MeetingInterface> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
