import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';

import Phone from "../../../../phones/infra/typeorm/entities/Phone";
import Address from "../../../../addresses/infra/typeorm/entities/Address";

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

  @OneToMany(() => Phone, phone => phone.user_id)
  @Column('varchar', { array: true })
  phones: Phone[]
  
  @OneToMany(() => Address, address => address.user_id)
  @Column('varchar', { array: true })
  addresses: Address[]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User