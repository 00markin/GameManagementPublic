import { Column, Entity, ManyToOne, } from "typeorm";
import { DefaultProps } from "./utils/DefaultProps";
import { Wallet } from "./Wallet";

@Entity("statement")
export class Statement extends DefaultProps {
  @Column({
    type: "numeric"
  })
  amount: number;

  @ManyToOne(
    () => Wallet,
    (wallet) => wallet.statements,
    {
      nullable: false
    }
  )
  wallet: Wallet;
}