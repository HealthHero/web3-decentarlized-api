module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    /**
     * Add altering commands here.
     *
     * Example:
     */
    try {
      await queryInterface.createTable("users", {
        id: {
          autoIncrement: true,
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        hashed_user_id: {
          type: Sequelize.TEXT,
          allowNull: true,
          unique: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: true,
        },
        delighted_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        encrypted_password: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: "",
        },
        reset_password_token: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        reset_password_sent_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        remember_created_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        sign_in_count: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        current_sign_in_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        last_sign_in_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        current_sign_in_ip: {
          type: "INET",
          allowNull: true,
        },
        last_sign_in_ip: {
          type: "INET",
          allowNull: true,
        },
        confirmation_token: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        confirmed_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        confirmation_sent_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        unconfirmed_email: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        failed_attempts: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        unlock_token: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        locked_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        organization_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        roles: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: true,
        },
        is_well: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        },
        conversation_reference: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        status: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        invite_token: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        invite_expires_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        invite_accepted_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        is_on_boarded: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        show_nav_cards: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        finished_on_boarding_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        current_app_version: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        last_app_version: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        app_version_updated_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        is_review_submitted: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        first_activity_completed_on: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        has_submitted: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        next_display_date: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        login_token: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        auto_steps_last_fetched_start_time: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        auto_steps_last_fetched_end_time: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        message_send_after_two_day_of_install: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        visit_after_two_day_of_install: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        message_after_four_days: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        google_fit_app_not_connected: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        send_first_know_about_us_survey: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        send_first_know_about_us_survey_time: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        is_know_about_us_survey_submitted: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        send_second_know_about_us_survey_time: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        stop_sending_now: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        is_global: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        preferred_language: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        telegram_id: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      }, { transaction });

      await queryInterface.addIndex(
        "users",
        ["confirmation_token"],
        { transaction },
      );
      await queryInterface.addIndex("users", ["invite_token"], { transaction });
      await queryInterface.addIndex("users", ["login_token"], { transaction });
      await queryInterface.addIndex("users", ["organization_id"], { transaction });
      await queryInterface.addIndex("users", ["reset_password_token"],
        { transaction });
      await queryInterface.addIndex("users", ["roles"], { transaction });
      await queryInterface.addIndex("users", ["status"], { transaction });
      await queryInterface.addIndex("users", ["unlock_token"], { transaction });
      await queryInterface.addIndex("users", ["email"], { transaction });
      await queryInterface.addIndex("users", ["id"], { transaction });
      await queryInterface.addIndex("users", ["hashed_user_id"], { transaction });

      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
      throw e;
    }
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable("users");
  },
};
