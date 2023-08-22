exports.handler = async function(event, context) {
  const redirectUrl = 'https://mynameisthe.xyz/'; // The external IP and port

  return {
    statusCode: 302, // Redirect status code
    headers: {
      Location: redirectUrl
    },
    body: 'Redirecting...'
  };
};
