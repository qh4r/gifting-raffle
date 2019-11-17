import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Generated, JoinColumn } from "typeorm";
import { RaffleModel } from "./raffle.model";
import { UserModel } from "../../users/models/user.model";

interface PairModelProps {
  order: string;
  raffle: RaffleModel;
  giver: UserModel;
  receiver: UserModel;
}

@Entity({
  name: "Pair"
})
export class PairModel {

  public static create(data: Partial<PairModelProps>): PairModel {
    const entity = new PairModel();
    Object.assign(entity, data);
    return entity
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Generated("increment")
  @Column()
  order: number;

  @ManyToOne(() => RaffleModel, raffle => raffle.pairs)
  @JoinColumn({name: "raffleId"})
  raffle: RaffleModel;

  @Column({ name: "raffleId" })
  raffleId: string;

  @ManyToOne(() => UserModel, user => user.giverPairs)
  @JoinColumn({name: "giverId"})
  giver: UserModel;

  @Column({ name: "giverId" })
  giverId: string;

  @ManyToOne(() => UserModel, user => user.receiverPairs, {nullable: true})
  receiver?: UserModel;
}
