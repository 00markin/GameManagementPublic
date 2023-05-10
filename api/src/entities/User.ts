import {
  Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne,
} from "typeorm";
import { Role } from "./Role";
import { Shop } from "./Shop";
import { Ticket } from "./Ticket";
import { DefaultProps } from "./utils/DefaultProps";
import { Wallet } from "./Wallet";

@Entity("user")
export class User extends DefaultProps {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @OneToOne(
    () => Wallet,
    (wallet) => wallet.user,
    {
      nullable: false
    }
  )
  @JoinColumn()
  wallet: Wallet;

  @ManyToMany(
    () => Role,
    (role) => role.users,
    {
      nullable: true
    }
  )
  @JoinTable()
  roles: Role[];

  @OneToMany(
    () => Ticket,
    (ticket) => ticket.user,
    {
      nullable: true
    }
  )
  tickets: Ticket[];

  @OneToOne(
    () => Shop,
    (shop) => shop.user,
    {
      nullable: true
    }
  )
  @JoinColumn()
  shop: Shop;
}