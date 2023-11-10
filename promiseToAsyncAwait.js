//given promise
newPromise().then(res => console.log(res))
.catch(err => console.log(err))


// converted to asycn await
async newPromiseFunction(){
  try {
    const res = await newPromise();
    console.log(res);
  } catch (err) {
    console.log(err);
  } 
} 