// app.use is a middilware its is connect a app.js route to ( Route )/ api.js Route.
// when you visit the /api/v1/ Route in brouser. Midillware send the request to api Routes.

app.use("/api/v1/", routeApi);
