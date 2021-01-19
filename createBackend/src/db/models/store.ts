import {
  Table,
  Column,
  Model,
  HasMany,
  Unique,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { Pet } from "./pet";
@Table({
  modelName: "Store",
  tableName: "Stores",
})

export class Store extends Model<Store> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Unique
  @Column
  id: number;

  @Column
  name: string;
  
  @HasMany(() => Pet)

  @AllowNull(false)
  @CreatedAt
  @Column
  createdAt: Date;

  @AllowNull(false)
  @UpdatedAt
  @Column
  updatedAt: Date;
}
