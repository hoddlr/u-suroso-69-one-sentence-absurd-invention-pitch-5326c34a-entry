// One line, one queue, one complaint: QueueBuddy holds your spot and texts you when it's your turn.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Meet the QueueBuddy: a pocket-sized traffic cop that stands in line for you, then texts 'your turn' the moment the cashier looks up — and files a formal complaint if anyone cuts in front of you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
