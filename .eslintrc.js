module.exports = {
  root: true,
  extends: ["universe/native"],
  rules: {
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": ["error", { semi: false }],
  },
}
