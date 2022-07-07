import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum RoomStatus {
  INACTIVE = 0,
  ACTIVE = 1,
}

@Entity({
  name: 'rooms',
})
export class Room {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'int',
  })
  company_id: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'int',
  })
  membersCount: number;

  @Column({
    type: 'enum',
    enum: RoomStatus,
    default: RoomStatus.ACTIVE,
  })
  status: RoomStatus;

  @Column({
    type: 'timestamp',
  })
  updated_at: string;

  @Column({
    type: 'timestamp',
  })
  created_at: string;
}
