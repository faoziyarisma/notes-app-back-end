console.log(
  "Bismillahirrahmanirrahiiim sukses & lancar serta diridloi Allah aaamiiinnnn ^-^"
);
console.log("Halo kita akan membuat RESTful API");

const Hapi = require("@hapi/hapi");
const routes = require("./routes"); // Adjust the path if necessary

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"], // Allow requests from any origin
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
