module.exports = {
  transformIgnorePatterns: ["node_modules/(?!axios)/"],
  type: "module",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
