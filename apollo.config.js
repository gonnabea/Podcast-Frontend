module.exports = {
  client: {
    includes: ["./src/**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: "jcast-backend",
      url: "https://nuber-eats-api-jiwon.herokuapp.com/graphql",
    },
  },
}
