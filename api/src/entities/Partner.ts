import { Column, Entity, OneToMany, } from "typeorm";
import { DefaultProps } from "./utils/DefaultProps";
import { Zone } from "./Zone";

@Entity("partner")
export class Partner extends DefaultProps {
  @Column()
  name: string;

  @Column()
  document_value: string;

  @Column()
  document_type: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  is_active: boolean;

  @OneToMany(
    () => Zone,
    (zone) => zone.partner,
    {
      nullable: true
    }
  )
  zones: Zone[];
}