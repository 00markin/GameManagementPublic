import {
  Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne,
} from "typeorm";
import { Lottery } from "./Lottery";
import { Ticket } from "./Ticket";
import { User } from "./User";
import { DefaultProps } from "./utils/DefaultProps";

@Entity("shop")
export class Shop extends DefaultProps {
  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  type: string;

  @Column("blob")
  qrcode: Buffer;

  @OneToOne(
    () => User,
    (user) => user.shop,
    {
      nullable: false
    }
  )
  @JoinColumn()
  user: User;

  @ManyToOne(
    () => Lottery,
    (lottery) => lottery.shops,
    {
      nullable: true
    }
  )
  lottery: Lottery;

  @OneToMany(
    () => Ticket,
    (ticket) => ticket.shop,
    {
      nullable: true
    }
  )
  tickets: Ticket[];
}

// disclaimer: Pessoalmente acho a forma a qual foi descrita pra salvar o qr code não muito eficiente...
// dependendo do tamanho da imagem, pode chegar a ficar MUITO grande o blob, podendo gerar alguma dificuldade na hora de salvar.
// Utilizaria um Bucket (Ex.: S3 Bucket da AWS), faria o upload da imagem lá e aqui salvaria apenas uma string com a key da mesma.