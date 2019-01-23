const notFoundError = (req, res) => {
  res.status(404).json({
    error: '404',
    desc: 'not found'
  });
};

const genericErrorHandler = (err, req, res) => {
  res.status(500).json({
    error: '500',
    desc: 'internal error'
  });
};

export { notFoundError };
export { genericErrorHandler };
