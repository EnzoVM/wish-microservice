const notFound = (request, response, error, next) => {
  response.status(404).json({
    message: 'Resource not found'
  }).end()
}

export default notFound
