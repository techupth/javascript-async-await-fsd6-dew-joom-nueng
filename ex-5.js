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

let fetchUser = async()=>{
  try{
    let user = await getJohnProfile()
    console.log(user);
  }catch(error){
    console.log(error);
  }
}
fetchUser()