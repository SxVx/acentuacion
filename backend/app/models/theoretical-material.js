'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class TheoreticalMaterial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TheoreticalMaterial.hasMany(models.SourceOrigin, {
        foreignKey: 'theoretical_material_id',
        as: 'SourceOrigin',
      })
    }
  }
  TheoreticalMaterial.init(
    {
      name: DataTypes.STRING,
      resource: DataTypes.STRING,
      theme_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: 'TheoreticalMaterial',
      modelName: 'TheoreticalMaterial',
      underscored: true,
      paranoid: true,
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      createdAt: 'created_at',
    },
  )
  return TheoreticalMaterial
}
