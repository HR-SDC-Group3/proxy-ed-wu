import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 100,
  rps: 200,
  duration: "15m"
};

var getRandomWeightedNum = function() {
  if (Math.random() > 0.2) {
    return Math.floor(Math.random() * (5001000 - 5000000) + 5000000);
  } else {
    return Math.floor(Math.random() * 10000000);
  }
}

export default function() {  
  let id = getRandomWeightedNum();

  let res = http.get(`http://localhost:3000/api/restaurants/${id}/menu`);
  check(res, {
    "success": (r) => r.status == 200
  });
};

