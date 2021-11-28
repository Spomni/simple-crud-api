function internalServerErrorView(req, res) {

  res.writeHead(500, 'Internal Server Error', {
    'Content-Type': 'text/plain; charset=UTF-8',
  })

  res.end()
}

module.exports = {
  internalServerErrorView,
}
