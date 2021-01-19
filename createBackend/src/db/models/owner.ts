import {
  Table,
  Column,
  Model,
  Unique,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from "sequelize-typescript";
import { Pet } from "./pet";
@Table({
  modelName: "Owner",
  tableName: "Owners",
})
export class Owner extends Model<Owner> {
  @AutoIncrement
  @PrimaryKey
  @AllowNull(false)
  @Unique
  @Column
  id: number;

  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: number;

  @HasMany(() => Pet, 'id')

  @AllowNull(false)
  @Column
  phoneNumber: string;

  @AllowNull(false)
  @CreatedAt
  @Column
  createdAt: Date;

  @AllowNull(false)
  @UpdatedAt
  @Column
  updatedAt: Date;
}
