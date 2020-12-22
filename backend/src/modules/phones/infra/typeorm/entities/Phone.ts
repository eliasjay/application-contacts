import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import User from '../../../../users/infra/typeorm/entities/User';

@Entity('phones')
class Phone {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  phone_number: string
  
  @Column()
  type: 'home' | 'work' | 'other'

  @ManyToOne(() => User, user_id => user_id.phones)
  user_id: User

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Phone