import {
  Table,
  Column,
  Model,
  ForeignKey,
  Unique,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
} from "sequelize-typescript";

import { Store } from "./store";
import { Owner } from "./owner";

@Table({
  modelName: "Pet",
  tableName: "Pets",
})

export class Pet extends Model<Pet> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Unique
  @Column
  id: number;

  @Column
  name: string;

  @Column
  age: number;

  @Column
  weight: number;

  @Column
  gender: string;

  @ForeignKey(() => Store)
  @Column
  storeID: number;

  @BelongsTo(() => Store, {as:'Store',foreignKey: 'storeId'})
  store: Store;

  @ForeignKey(() => Owner)
  @Column
  ownerID: number;

  @BelongsTo(() => Owner, {as:'Owner',foreignKey: 'ownerId'})
  ownerId: Owner;

  @Column
  breed: string;

  @AllowNull(false)
  @CreatedAt
  @Column
  createdAt: Date;

  @AllowNull(false)
  @UpdatedAt
  @Column
  updatedAt: Date;
}
