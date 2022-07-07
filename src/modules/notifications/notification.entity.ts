import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum NotificationType {
  INVITATION_TO_COMPANY = 0,
  INVITATION_TO_MEETING = 1,
  MEETING_CANCELED = 1,
}
@Entity({
  name: 'notifications',
})
export class Notification {
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
    type: 'enum',
    enum: NotificationType,
    default: null,
  })
  type: NotificationType;

  @Column({
    type: 'timestamp',
  })
  updated_at: string;

  @Column({
    type: 'timestamp',
  })
  created_at: string;
}
