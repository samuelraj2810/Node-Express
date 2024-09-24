const GeneratePassword = (length) => {
  let Characters = "1234567890-=qwertyuiop[]\asdfghjkl;'zxcvbnm,./";
  let Password = "";
  for (let index = 0; index < length; index++) {
    Password += Characters.charAt(Math.floor(Math.random() * Characters.length));
  }
  return Password;
};


module.exports = GeneratePassword;