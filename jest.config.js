export default {
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "./transformImportMeta.js",
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ["./jest.setup.js"],
    testEnvironment: "jsdom",
    extensionsToTreatAsEsm: [".jsx"]
  };
  