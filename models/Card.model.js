const { Schema, model } = require("mongoose");

const cardSchema = new Schema(
    {
        city:           {
            type:       String,
            required:   true
        },
        date:           Date,
        recommendation: {
            type:       String,
            required:   true
        },
        rating:         {
            type:       Number,
            min:        1,
            max:        5
        },
        userOwnerId:    {
            type:       Schema.Types.ObjectId,
            ref:        'User'
        },
        userOwnerName:  {
            type:       Schema.Types.Mixed,
            ref:        'User'
        },
        coordinates:    [
            {
                type:   Number
            }
        ]
    }
)

const Card     = model("Card", cardSchema);
module.exports = Card;