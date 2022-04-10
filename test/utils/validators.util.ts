const isApiGatewayResponse = (response: any) => {  
  const { body, status } = response;

  if (!body || !status) return false;
  if (typeof status !== 'number') return false;
  if (typeof body !== 'object') return false;
  return true;
};

export { isApiGatewayResponse };
