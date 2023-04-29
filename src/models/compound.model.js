const { DataTypes } = require("sequelize");


exports.Compound = sequelize.define("compound", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    CompoundName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CompounrDescription: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    strImageSource: {
        type: DataTypes.STRING,
        allowNull: false
    },
    strImageAttribution: {
        type: DataTypes.STRING
    },
    dateModified: {
        type: DataTypes.DATEONLY
    }
}, {
    charset: 'utf8mb4', /* i add this two ligne here for generate the table with collation  = 'utf8_general_ci' test it and tell me ? */
    collate: 'utf8mb4_unicode_ci'
});
