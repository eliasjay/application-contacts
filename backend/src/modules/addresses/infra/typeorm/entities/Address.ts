import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import User from '../../../../users/infra/typeorm/entities/User';

@Entity('addresses')
class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  street: string

  @Column()
  district: string
  
  @Column()
  state: string

  @Column()
  country: string
  
  @Column()
  zipcode: string
  
  @Column()
  type: 'home' | 'work' | 'other'

  @ManyToOne(() => User, user_id => user_id.addresses)
  user_id: User

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Address