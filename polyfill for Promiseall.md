```
if (!Promise.all) {
  Promise.all = function (promises) {
    return new Promise(function (resolve, reject) {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('Promises must be an array'));
      }

      var results = [];
      var completedCount = 0;

      promises.forEach(function (promise, index) {
        Promise.resolve(promise)
          .then(function (result) {
            results[index] = result;
            completedCount++;

            if (completedCount === promises.length) {
              resolve(results);
            }
          })
          .catch(function (error) {
            reject(error);
          });
      });
    });
  };
}
```
// Example usage
const promises = [
  Promise.resolve(1),
  Promise.reject('Error'),
  Promise.resolve(3),
];

Promise.all(promises)
  .then((results) => {
    console.log(results);
    // Output: [1, 'Error', 3]
  })
  .catch((error) => {
    console.error(error);
  });

