exports.handler = async function(event, context) {
  const redirectUrl = 'http://69.14.211.78:8000'; // The external IP and port

  return {
    statusCode: 302, // Redirect status code
    headers: {
      Location: redirectUrl
    },
    body: 'Redirecting...'
  };
};
