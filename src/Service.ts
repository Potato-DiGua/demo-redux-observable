// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) => {
    let count = 0;
    const time = 100;
    const timer = setInterval(() => {
      count += time;
      console.log(count);
    }, time);
    setTimeout(() => {
      resolve({ data: amount });
      clearInterval(timer);
    }, 1000);
  });
}
