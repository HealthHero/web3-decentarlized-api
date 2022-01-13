module.exports = function (sequelize, DataTypes) {
  return sequelize.define("users", {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    encrypted_password: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    reset_password_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reset_password_sent_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    remember_created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    sign_in_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    current_sign_in_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    last_sign_in_at: {
      type: DataTypes.DATE,
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
      type: DataTypes.STRING,
      allowNull: true,
    },
    confirmed_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    confirmation_sent_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    unconfirmed_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    failed_attempts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    unlock_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    locked_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    delighted_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    developer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    roles: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    is_well: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    conversation_reference: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    invite_token: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    invite_expires_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    invite_accepted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_on_boarded: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    show_nav_cards: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    finished_on_boarding_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    current_app_version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_app_version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    app_version_updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_review_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    first_activity_completed_on: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    has_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    next_display_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    login_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    auto_steps_last_fetched_start_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    auto_steps_last_fetched_end_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    message_send_after_two_day_of_install: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    visit_after_two_day_of_install: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    message_after_four_days: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    google_fit_app_not_connected: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    send_first_know_about_us_survey: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    send_first_know_about_us_survey_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_know_about_us_survey_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    send_second_know_about_us_survey_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    stop_sending_now: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    is_global: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    preferred_language: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    telegram_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hashed_user_id: {
      type: DataTypes.BLOB,
      allowNull: true,
      unique: true,
    },
    time_zone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    tableName: "users",
    schema: "public",
    timestamps: true,
    underscored: true,
    indexes: [
      {
        name: "index_users_on_confirmation_token",
        unique: true,
        fields: [
          { name: "confirmation_token" },
        ],
      },
      {
        name: "index_users_on_invite_token",
        fields: [
          { name: "invite_token" },
        ],
      },
      {
        name: "index_users_on_hashed_user_id",
        fields: [
          { name: "hashed_user_id" },
        ],
      },
      {
        name: "index_users_on_login_token",
        unique: true,
        fields: [
          { name: "login_token" },
        ],
      },
      {
        name: "index_users_on_developer_id",
        fields: [
          { name: "developer_id" },
        ],
      },
      {
        name: "index_users_on_reset_password_token",
        unique: true,
        fields: [
          { name: "reset_password_token" },
        ],
      },
      {
        name: "index_users_on_roles",
        fields: [
          { name: "roles" },
        ],
      },
      {
        name: "index_users_on_status",
        fields: [
          { name: "status" },
        ],
      },
      {
        name: "index_users_on_unlock_token",
        unique: true,
        fields: [
          { name: "unlock_token" },
        ],
      },
      {
        name: "users_email_uindex",
        unique: true,
        fields: [
          { name: "email" },
        ],
      },
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ],
      },
    ],
  });
};
