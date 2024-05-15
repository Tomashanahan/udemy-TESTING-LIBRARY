import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3030/scoops", async () => {
    return HttpResponse.json([
      { name: "Chocolate", imagePath: "/images/chocolate.png" },
      { name: "Vanilla", imagePath: "/images/vanilla.png" },
    ]);
  }),
  http.get("http://localhost:3030/toppings", async () => {
    return HttpResponse.json([
      { name: "Cherries", imagePath: "/images/cherries.png" },
      { name: "MyMs", imagePath: "/images/m-y-ms.png" },
      { name: "Hot Fudge", imagePath: "/images/hot-fudge.png" },
    ]);
  }),
];
