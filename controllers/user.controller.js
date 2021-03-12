const users = []

module.exports.createUser = async (req, res, next) => {
  const { body: validatedUser } = req

  validatedUser.id = users.length
  delete validatedUser.password
  validatedUser.createdAt = new Date()

  users.push(validatedUser) // save

  res.status(201).send(validatedUser)
}
