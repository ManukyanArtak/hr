import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  area: string;

  @Column({
    type: 'varchar',
  })
  address: string;

  @Column({
    type: 'text',
  })
  logo: string;

  @Column({
    type: 'timestamp',
  })
  updated_at: string;

  @Column({
    type: 'timestamp',
  })
  created_at: string;
}
