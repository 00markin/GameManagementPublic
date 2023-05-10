import {
  BaseEntity, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";

@Entity()
export class DefaultProps extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}


// disclaimer: todas as classes tinham id em comum
// por segurança, troquei o id(que seria inteiro incremental por um id unico)
// por boas práticas e registro no banco de dados, adicionei os time stamps
// evitando redundância de código