const fs = require("fs");

fs.mkdirSync("dist");
fs.mkdirSync("dist/core");
fs.mkdirSync("dist/formula-parser");
fs.mkdirSync("dist/react");

const { spawnSync } = require("child_process");

const tsconfig = JSON.parse(fs.readFileSync("tsconfig.json"));

delete tsconfig.compilerOptions.paths;
tsconfig.include = ["./src"];
tsconfig.exclude = [
  "node_modules",
  "**/*.test.ts",
  "**/*.spec.ts",
  "dist",
  "lib",
];

const tsconfigJson = JSON.stringify(tsconfig);
fs.writeFileSync("packages/core/tsconfig.json", tsconfigJson);
fs.writeFileSync("packages/react/tsconfig.json", tsconfigJson);

spawnSync("father-build", { stdio: "inherit" });

fs.rmSync("packages/core/tsconfig.json");
fs.rmSync("packages/react/tsconfig.json");

const move = (oldPath, newPath) => {
  fs.rename(oldPath, newPath, function (err) {
    if (err) throw err
    console.log(`renamed ${oldPath} -> ${newPath}`);
  });
};

// move('packages/core/dist', 'dist/core/dist');
// fs.copyFileSync('packages/core/package.json', 'dist/core/package.json');

// fs.cpSync('packages/formula-parser/src/', 'dist/formula-parser/es/', {recursive: true});
// fs.cpSync('packages/formula-parser/src/', 'dist/formula-parser/lib/', {recursive: true});
// fs.copyFileSync('packages/formula-parser/package.json', 'dist/formula-parser/package.json');

// move('packages/react/dist', 'dist/react/dist');
// fs.copyFileSync('packages/react/package.json', 'dist/react/package.json');