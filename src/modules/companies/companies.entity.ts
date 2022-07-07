import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { CompanyUsers } from '../../database/entyties/ManyToManyEntytis/companyUsers.entity';

@Entity({
  name: 'companies',
})
export class Company {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
  })
  name: string;
  @Column({
    type: 'varchar',
  })
  city: string;
  @Column({
    type: 'varchar',
  })
  phone: string;
  @Column({
    type: 'varchar',
  })
  address: string;
  @Column({
    type: 'varchar',
  })
  postalCode: string;

  @OneToMany(() => CompanyUsers, (companyUsers) => companyUsers.company)
  companyUsers: CompanyUsers[];
}
