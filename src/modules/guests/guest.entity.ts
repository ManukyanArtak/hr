import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({
  name: 'guests',
})
export class Guest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
  })
  company_id: number;

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
    type: 'timestamp',
  })
  updated_at: string;

  @Column({
    type: 'timestamp',
  })
  created_at: string;
}
