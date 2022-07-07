import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../modules/users/user.entity';
import { Company } from '../../../modules/companies/companies.entity';

export enum UserRole {
  ADMIN = 1,
  EMPLOYEE = 2,
}
@Entity({
  name: 'company_users',
})
export class CompanyUsers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
  })
  userId: number;

  @Column({
    type: 'int',
  })
  categoryId: number;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.EMPLOYEE,
  })
  role: UserRole;

  @ManyToOne(() => User, (user) => user.companyUsers)
  user: User;

  @ManyToOne(() => Company, (company) => company.companyUsers)
  company: Company;
}
