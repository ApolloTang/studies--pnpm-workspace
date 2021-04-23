+-------+        + - - - +         + - - - +
| pkg-a |------->  pkg-d  -------->  pkg-b
+-------+        + - - - +         + - - - +


$ pnpm install:all

01-local-dependencies/
│
├── node_modules/
├── npm-packages-local/
│   ├── local-pkg-b/
│   │   ├── node_modules/
│   │   │   └── @apollotang/
│   │   │       └── local-pkg-d -> ../../../local-pkg-d/
│   │   └── package.json
│   ├── local-pkg-c/
│   │   └── package.json
│   └── local-pkg-d/
│       └── package.json
├── private-packages/
│   ├── private-pkg-x/
│   │   ├── node_modules/
│   │   │   └── @apollotang/
│   │   │       └── local-pkg-b -> ../../../../npm-packages-local/local-pkg-b/
│   │   ├── src/
│   │   └── package.json
│   ├── private-pkg-y/
│   │   ├── src/
│   │   └── package.json
│   └── README.md
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
