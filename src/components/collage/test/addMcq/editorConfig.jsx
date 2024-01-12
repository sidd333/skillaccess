// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
  console.error(error);
}

const theme = {
  // Theme styling goes here
};

export const initialConfig = {
  namespace: "MyEditor",
  theme,
  nodes: [],
  onError,
};
