
const errorMiddleware = async (
  error,
  req,
  res,
  next
) => {
  try {
    const status = error.status || 500
    const message = error.message || 'Something went wrong'

    res.status(status).json({ message })
  } catch (err) {
    next(err) // Exception thrown in error handling
  }
}
module.exports = errorMiddleware
