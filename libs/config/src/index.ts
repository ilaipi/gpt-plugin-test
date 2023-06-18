export default () => {
  const env = {
    gptApiKey: process.env.GPT_API_KEY,
  };
  return { env };
};
