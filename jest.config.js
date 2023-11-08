module.exports = {
  transformIgnorePatterns: ["node_modules/(?!axios)/"],
  type: "module",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};

// module.exports = {
//   preset: "@testing-library/react-native",
//   moduleDirectories: ["node_modules", "src"],
//   transform: {
//     "^.+\\.js$": require.resolve("react-native/jest/preprocessor.js"),
//   },
//   testMatch: ["**/__tests__/**/*.[jt]s?(x)"],
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "test.tsx"],
//   transformIgnorePatterns: [
//     "node_modules/(?!(" +
//       "react-native|" +
//       "react-native-fs|" +
//       "react-navigation|" +
//       "@react-navigation/native|" +
//       "@react-navigation|" +
//       "react-native-config|" +
//       "react-redux|" +
//       "react-native-linear-gradient|" +
//       "react-native-animatable|" +
//       "react-native-modal|" +
//       "@react-native|" +
//       "react-native-device-info|" +
//       "rn-fetch-blob|" +
//       "react-native-adjust|" +
//       "react-native-screens|" +
//       "react-native-actions-sheet|" +
//       "react-native-snap-carousel|" +
//       "query-string|" +
//       "react-native-collapsible|" +
//       "react-native-blob-util|" +
//       "react-native-image-resizer|" +
//       "react-native-keyboard-aware-scroll-view|" +
//       "react-native-calendars|" +
//       "react-native-swipe-gestures|" +
//       "react-native-flipper|" +
//       "@sentry/react-native|" +
//       "react-native-country-flag|" +
//       "@react-native-cookies|" +
//       "react-native-keychain|" +
//       "react-native-image-picker|" +
//       "react-native-permission|" +
//       "react-native-camera|" +
//       "react-native-date-picker|" +
//       "@react-native-clipboard|" +
//       "react-native-video|" +
//       "react-native-view-pdf|" +
//       "react-native-share|" +
//       "react-native-color-matrix-image-filters|" +
//       "react-native-webview|" +
//       "react-native-wheel-scrollview-picker|" +
//       "@terrylinla/react-native-sketch-canvas|" +
//       "react-native-wheel-color-picker|" +
//       "react-native-in-app-review|" +
//       "react-native-version-check|" +
//       "@moments-app/react-native-timeline-flatlist|" +
//       "react-native-health|" +
//       "react-native-pedometer-details|" +
//       "rn-swipe-button|" +
//       "@miblanchard/react-native-slider|" +
//       "react-native-orientation-locker|" +
//       "react-native-recaptcha-that-works|" +
//       "@notifee|" +
//       "native-base)/)",
//   ],
//   setupFilesAfterEnv: [
//     "@testing-library/jest-native/extend-expect",
//     "./jest.setup.ts",
//   ],
//   moduleNameMapper: {
//     "@test/(.*)": "<rootDir>/__tests__/test-utils",
//     "@test-mock/(.*)": "<rootDir>/__mocks__/index",
//   },
// };
