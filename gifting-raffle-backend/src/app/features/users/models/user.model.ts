import { Column, Entity, PrimaryGeneratedColumn, Index, CreateDateColumn, OneToMany } from "typeorm";
import { RaffleModel } from "../../raffles/models/raffle.model";
import { PairModel } from "../../raffles/models/pair.model";

interface UserModelProps {
  email: string;
  name: string;
  password: string;
  salt: string;
  ownedRaffles: string;
  giverPairs: string;
  receiverPairs: string;
}

@Entity({
  name: "User"
})
export class UserModel {

  public static create(data: Partial<UserModelProps>): UserModel {
    const entity = new UserModel();
    Object.assign(entity, data);
    return entity
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  @Index({ unique: true })
  email: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => RaffleModel, raffle => raffle.owner)
  ownedRaffles: RaffleModel[];

  @OneToMany(() => PairModel, pair => pair.giver)
  giverPairs: PairModel[];

  @OneToMany(() => PairModel, pair => pair.receiver)
  receiverPairs: PairModel[];
}
