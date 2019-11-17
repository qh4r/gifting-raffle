import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PairModel } from "./pair.model";
import { UserModel } from "../../users/models/user.model";

interface RaffleModelProps {
  name: string;
  joinKey: string;
  finished: boolean;
  pairs: PairModel[];
  owner: UserModel;
}

@Entity({
  name: "Raffle",
})
export class RaffleModel {

  public static create(data: Partial<RaffleModelProps>): RaffleModel {
    const entity = new RaffleModel();
    Object.assign(entity, data);
    return entity;
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  @Index({ unique: true })
  name: string;

  @Column({ length: 50 })
  joinKey: string;

  @Column({ default: false })
  finished: boolean;

  @OneToMany(() => PairModel, pair => pair.raffle, { cascade: true })
  pairs: PairModel[];

  @ManyToOne(() => UserModel, user => user.ownedRaffles)
  @JoinColumn({ name: "ownerId" })
  owner: UserModel;

  @Column({ name: "ownerId" })
  ownerId: string;
}
