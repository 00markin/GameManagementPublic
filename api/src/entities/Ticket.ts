import { Column, Entity, ManyToOne, } from "typeorm";
import { Lottery } from "./Lottery";
import { Shop } from "./Shop";
import { User } from "./User";
import { DefaultProps } from "./utils/DefaultProps";

@Entity("ticket")
export class Ticket extends DefaultProps {
  @Column({
    type: "numeric"
  })
  value: number;

  @Column()
  bet: string;

  @Column()
  valid_until: Date;

  @ManyToOne(
    () => Lottery,
    (lottery) => lottery.tickets,
    {
      nullable: false
    }
  )
  lottery: Lottery;

  @ManyToOne(
    () => Shop,
    (shop) => shop.tickets,
    {
      nullable: true
    }
  )
  shop: Shop;

  @ManyToOne(
    () => User,
    (user) => user.tickets,
    {
      nullable: true
    }
  )
  user: User;
}

// disclaimer: parte da relação Ticket <=> Shop está oculta pelo próprio Shop, utilizando a lógica:
// 1 Shop ter 0 ou mais tickets, mas um ticket pode ter 0 ou uma loja