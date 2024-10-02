export default function getResponseFromAPI() {
  return new Promise((resolve, rejected) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    }else {
      rejected(new Error('The fake API is not working currently'));
    }
  });
}
