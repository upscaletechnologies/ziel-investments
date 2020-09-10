export default function(context) {
  return {
    httpEndpoint: 'https://graphql.datocms.com',
    getAuth: () => '00841129928f52e846e756c771a9ba', // Bearer is added by default.
  };
}
