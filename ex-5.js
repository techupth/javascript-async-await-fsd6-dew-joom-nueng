// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here


const profile = async () => {
  try {
    const displayProfile = await getJohnProfile();
    console.log(displayProfile);
  }catch(error) {
    console.log(error)
  }
}
profile();
