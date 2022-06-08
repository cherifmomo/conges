module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        lastname: String,
        firstname: String,
        start: String,
        end: String,
        status: String,
        category: String
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Employee = mongoose.model("employee", schema);
    return Employee;
  };