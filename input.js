let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

const handleUserInput = key => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    console.log("up");
  } else if (key === "a") {
    console.log("left");
  } else if (key === "s") {
    console.log("down");
  } else if (key === "d") {
    console.log("right");
  }
}

setupInput();

module.exports = { setupInput };