import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserType } from '../users/user.entity';
export enum JobStatus {
  TODO = 0,
  STARTED = 1,
}
@Entity({
  name: 'jobs',
})
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  payload: string;

  @Column({
    type: 'timestamp',
  })
  start_time: string;

  @Column({
    type: 'enum',
    enum: JobStatus,
    default: JobStatus.TODO,
  })
  type: JobStatus;

  @Column({
    type: 'timestamp',
  })
  updated_at: string;

  @Column({
    type: 'timestamp',
  })
  created_at: string;
}
