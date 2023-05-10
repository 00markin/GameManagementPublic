import {
  Column, Entity, JoinColumn, ManyToOne,
} from "typeorm";
import { GameTemplate } from "./GameTemplate";
import { Lottery } from "./Lottery";
import { DefaultProps } from "./utils/DefaultProps";

@Entity("game")
export class Game extends DefaultProps {
  @Column()
  executed_at: Date;

  @Column()
  expires_at: Date;

  @ManyToOne(
    () => GameTemplate,
    (gameTemplate) => gameTemplate.games,
    {
      nullable: false
    }
  )
  gameTemplate: GameTemplate;

  @ManyToOne(
    () => Lottery,
    (lottery) => lottery.games,
    {
      nullable: false
    }
  )
  lottery: Lottery;

}