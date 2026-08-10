const greet = (name = "Guest") => {
  return `Hi ${name}, welcome back`;
};

console.log(greet());
console.log(greet("Phuwadon"));

const buildSettings = (opts = {}) => {
  const { fontSize = 16 } = opts;

  return {
    theme: opts?.theme ?? "light",
    fontSize,
    plugins: [...(opts.plugins ?? []), "core"]
  };
};

console.log(buildSettings());
console.log(buildSettings({ theme: "dark", plugins: ["md"] }));
