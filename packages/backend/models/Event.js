const mongoose = require('mongoose');
const createPublicIDPlugin = require('../utils/createPublicIdPlugin');

const eventSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    barber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Barber',
    },
    service: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
      },
    ],
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['waiting', 'done', 'decline'],
      default: 'waiting',
    },
  },
  { timestamps: true },
);

class EventClass {
  static findAndPopulate(id) {
    const event = this.findOne({ publicId: id })
      .populate({ path: 'user', select: 'name email publicId' })
      .populate({ path: 'barber', select: 'name publicId' })
      .populate({ path: 'service', select: 'name price publicId' });

    if (!event) {
      return this.findById(id)
        .populate({ path: 'user', select: 'name email publicId' })
        .populate({ path: 'barber', select: 'name publicId' })
        .populate({ path: 'service', select: 'name price publicId' });
    }

    return event;
  }
}

eventSchema.plugin(createPublicIDPlugin);

eventSchema.loadClass(EventClass);

module.exports = mongoose.model('Event', eventSchema);
