import { Column, Entity, OneToMany, } from "typeorm";
import { Game } from "./Game";
import { DefaultProps } from "./utils/DefaultProps";

@Entity("game-template")
export class GameTemplate extends DefaultProps {
  @Column()
  type: string;

  @Column()
  definition: string;

  @Column()
  description: string;

  @OneToMany(
    () => Game,
    (game) => game.gameTemplate,
    {
      nullable: true
    }
  )
  games: Game[];
}