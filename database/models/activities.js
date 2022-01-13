module.exports = function (sequelize, DataTypes) {
  return sequelize.define("activities", {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    activity_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    identity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
        onDelete: "CASCADE",
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    source: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    step_count: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    source_info: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    provider: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    is_global: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  }, {
    sequelize,
    tableName: "activities",
    schema: "public",
    timestamps: true,
    underscored: true,
    indexes: [
      {
        name: "activities_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ],
      },
      {
        name: "index_activities_on_activity_type",
        fields: [
          { name: "activity_type" },
        ],
      },
      {
        name: "index_activities_on_identity_id",
        fields: [
          { name: "identity_id" },
        ],
      },
      {
        name: "index_activities_on_source",
        fields: [
          { name: "source" },
        ],
      },
      {
        name: "index_activities_on_source_info",
        fields: [
          { name: "source_info" },
        ],
      },
      {
        name: "index_activities_on_user_id",
        fields: [
          { name: "user_id" },
        ],
      },
      {
        name: "uniquness_constraint_in_activity",
        unique: true,
        fields: [
          { name: "start_time" },
          { name: "end_time" },
          { name: "step_count" },
          { name: "user_id" },
          { name: "provider" },
        ],
      },
    ],
  });
};
