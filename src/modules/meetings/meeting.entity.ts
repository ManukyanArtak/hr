import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'meetings',
})
export class Meeting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
  })
  user_id: number;

  @Column({
    type: 'int',
  })
  company_id: number;

  @Column({
    type: 'int',
  })
  room_id: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'int',
  })
  duration: number;

  @Column({
    type: 'timestamp',
  })
  start_time: string;

  @Column({
    type: 'timestamp',
  })
  updated_at: string;

  @Column({
    type: 'timestamp',
  })
  created_at: string;
}
