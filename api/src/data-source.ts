import { DataSource } from "typeorm";
import { Game } from "./entities/Game";
import { GameTemplate } from "./entities/GameTemplate";
import { Lottery } from "./entities/Lottery";
import { Partner } from "./entities/Partner";
import { Role } from "./entities/Role";
import { Setting } from "./entities/Setting";
import { Shop } from "./entities/Shop";
import { Statement } from "./entities/Statement";
import { Ticket } from "./entities/Ticket";
import { User } from "./entities/User";
import { Wallet } from "./entities/Wallet";
import { Zone } from "./entities/Zone";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: true,
  logging: false,
  entities: [Game, GameTemplate, Lottery, Partner, Role, Setting, Shop, Statement, Ticket, User, Wallet, Zone],
  migrations: [],
  subscribers: [],
});
