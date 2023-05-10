import {
  Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne,
} from "typeorm";
import { Lottery } from "./Lottery";
import { Statement } from "./Statement";
import { User } from "./User";
import { DefaultProps } from "./utils/DefaultProps";

@Entity("wallet")
export class Wallet extends DefaultProps {
  @Column()
  active: boolean;

  @ManyToOne(
    () => Lottery,
    (lottery) => lottery.wallets,
    {
      nullable: false
    }
  )
  lottery: Lottery;

  @OneToMany(
    () => Statement,
    (statement) => statement.wallet,
    {
      nullable: true
    }
  )
  statements: Statement[];

  @OneToOne(
    () => User,
    (user) => user.wallet,
    {
      nullable: true
    }
  )
  @JoinColumn()
  user: User;

}