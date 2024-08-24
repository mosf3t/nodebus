import { app } from "./app";
import { CONSTANTS } from "./constants";

app.listen(CONSTANTS.PORT, () =>
  console.log(`Example app listening at http://localhost:${CONSTANTS.PORT}`)
);
