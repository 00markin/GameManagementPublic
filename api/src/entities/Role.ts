import {
  Column, Entity, JoinTable, ManyToMany,
} from "typeorm";
import { User } from "./User";
import { DefaultProps } from "./utils/DefaultProps";

@Entity("role")
export class Role extends DefaultProps {
  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToMany(
    () => User,
    (user) => user.roles,
    {
      nullable: true
    }
  )
  @JoinTable()
  users: User[];
}