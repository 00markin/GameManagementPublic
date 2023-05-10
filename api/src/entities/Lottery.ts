import {
  Column, Entity, JoinTable, ManyToMany, OneToMany,
} from "typeorm";
import { Game } from "./Game";
import { Setting } from "./Setting";
import { Shop } from "./Shop";
import { Ticket } from "./Ticket";
import { DefaultProps } from "./utils/DefaultProps";
import { Wallet } from "./Wallet";
import { Zone } from "./Zone";

@Entity("lottery")
export class Lottery extends DefaultProps {
  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  city: string;

  @OneToMany(
    () => Zone,
    (zone) => zone.lotteries,
    {
      nullable: true
    }
  )
  zones: Zone[];

  @OneToMany(
    () => Game,
    (game) => game.lottery,
    {
      nullable: false
    }
  )
  games: Game[];

  @OneToMany(
    () => Wallet,
    (wallet) => wallet.lottery,
    {
      nullable: false
    }
  )
  wallets: Wallet[];
  // discalaimer: adaptado para a lógica apresentada

  @ManyToMany(
    () => Setting,
    (setting) => setting.lotteries,
    {
      nullable: true
    }
  )
  @JoinTable()
  settings: Setting[];

  @OneToMany(
    () => Ticket,
    (ticket) => ticket.lottery,
    {
      nullable: false
    }
  )
  tickets: Ticket[];

  @OneToMany(
    () => Shop,
    (shop) => shop.lottery,
    {
      nullable: false
    }
  )
  shops: Shop[];

}

// disclaimer: as relações de Lottery => Ticket e Lottery => Shop estão emboladas, adapatado para a lógica:
// 1 Lottery p/ varios tickets, mas 1 Ticket p/ uma Lottery
// 1 Lottery p/ 0 ou vários Shops, mas 1 Shop p/ uma Lottery