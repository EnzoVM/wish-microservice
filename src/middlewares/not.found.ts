const notFound = (request, response, next) => {
  response.status(404).json({
    message: 'Resource not found'
  }).end()
}

export default notFound
