import {
  Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne,
} from "typeorm";
import { Lottery } from "./Lottery";
import { Partner } from "./Partner";
import { Setting } from "./Setting";
import { DefaultProps } from "./utils/DefaultProps";

@Entity("zone")
export class Zone extends DefaultProps {
  @Column()
  indentifier_key: string;

  @Column()
  region: string;

  @Column()
  city: string;

  @ManyToOne(
    () => Partner,
    (partner) => partner.zones,
    {
      nullable: true
    }
  )
  @JoinColumn({
    name: "partner_id",
  })
  partner: Partner;

  @ManyToMany(
    () => Setting,
    (setting) => setting.zones,
    {
      cascade: true,
      nullable: true
    }
  )
  @JoinTable()
  settings: Setting[];

  @ManyToOne(
    () => Lottery,
    (lottery) => lottery.zones,
    {
      nullable: false
    }
  )
  @JoinColumn({
    name: "lottery_id"
  })
  lotteries: Lottery[];

}