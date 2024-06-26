import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'


export default class BiblestudyGroup extends BaseModel {
  public static table = 'bible_study_groups'
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name : string

  @column()
  declare study_id : string

  @column()
  declare attendant : number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}