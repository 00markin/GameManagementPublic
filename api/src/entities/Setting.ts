import {
  Column, Entity, JoinTable, ManyToMany,
} from "typeorm";
import { Lottery } from "./Lottery";
import { DefaultProps } from "./utils/DefaultProps";
import { Zone } from "./Zone";

@Entity("setting")
export class Setting extends DefaultProps {
  @Column()
  value: string;

  @Column()
  type: string;

  @ManyToMany(
    () => Zone,
    (zone) => zone.settings,
    {
      nullable: true
    }
  )
  @JoinTable()
  zones: Zone[];

  @ManyToMany(
    () => Lottery,
    (lottery) => lottery.settings,
    {
      nullable: true
    }
  )
  @JoinTable()
  lotteries: Lottery[];
}