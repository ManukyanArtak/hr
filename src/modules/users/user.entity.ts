import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CompanyUsers } from '../../database/entyties/ManyToManyEntytis/companyUsers.entity';

export enum UserType {
  ADMIN = 0,
  WORKER = 1,
}

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  first_name: string;

  @Column({
    type: 'varchar',
  })
  last_name: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 20,
  })
  phone: string;

  @Column({
    type: 'varchar',
  })
  position: string;

  @Column({
    type: 'varchar',
  })
  password: string;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.ADMIN,
  })
  type: UserType;

  @Column({
    type: 'timestamp',
  })
  updated_at: string;

  @Column({
    type: 'timestamp',
  })
  created_at: string;

  @OneToMany(() => CompanyUsers, (companyUsers) => companyUsers.user)
  companyUsers: CompanyUsers[];
}
