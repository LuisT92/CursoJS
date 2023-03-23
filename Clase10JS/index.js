import chalk from "chalk";

import { suma, multiplicacion } from "./controller.js";

console.log(suma(2, 3));
console.log(multiplicacion(2, 3));

console.log(chalk.green(suma(2, 3)));
console.log(chalk.green(multiplicacion(2, 3)));
