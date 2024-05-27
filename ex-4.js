// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
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