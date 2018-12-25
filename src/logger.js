const debug = false;

const logger = (msg) => {
  if(debug) {
    console.log(msg);
  }
};

module.exports = logger;