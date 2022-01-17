module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable("activities", {
        id: {
          autoIncrement: true,
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        activity_type: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        identity_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "users",
            key: "id",
            onDelete: "CASCADE",
          },
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        comment: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        source: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        start_time: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        end_time: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        step_count: {
          type: Sequelize.BIGINT,
          allowNull: true,
        },
        source_info: {
          type: Sequelize.STRING,
          allowNull: true,
          default: 0,
        },
        provider: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        is_global: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
      }, { transaction });

      await queryInterface.addIndex("activities", ["id"], { transaction });
      await queryInterface.addIndex("activities", ["activity_type"], { transaction });
      await queryInterface.addIndex("activities", ["identity_id"], { transaction });
      await queryInterface.addIndex("activities", ["source"], { transaction });
      await queryInterface.addIndex("activities", ["source_info"], { transaction });
      await queryInterface.addIndex("activities", ["user_id"], { transaction });

      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
      throw e;
    }
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("activities");
  },
};
