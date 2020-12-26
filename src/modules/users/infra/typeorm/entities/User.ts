import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string
  
  @Column()
  birth_date: Date

  @Column()
  facebook: string

  @Column()
  linkedin: string

  @Column()
  twitter: string

  @Column()
  instagram: string

  @Column()
  cpf: string

  @Column()
  rg: string

  @Column({ type: 'json' })
  phones: {
    phone_number: string,
    type: 'home' | 'work' | 'other'
  }[]
  
  @Column({ type: 'json' })
  addresses: {
    street: string,
    city: string,
    state: string,
    country: string,
    zipcode: string,
    type: 'home' | 'work' | 'other'
  }[]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User