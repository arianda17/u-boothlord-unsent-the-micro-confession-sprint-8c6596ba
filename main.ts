import { mkdirSync, writeFileSync } from "node:fs";

const line1 = "To: my little brother";
const line2 = "I was the one who broke your bike the summer before you left for college, and I let you blame the neighbour's dog for ten years.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${line1}\n${line2}\n`, "utf-8");

console.log(line1);
console.log(line2);