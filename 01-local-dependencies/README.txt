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
│   └── local-pkg-d/
│       └── package.json
└── private-packages/
    └── private-pkg-a/
        ├── node_modules/
        │   └── @apollotang/
        │       └── local-pkg-b -> ../../../../npm-packages-local/local-pkg-b/
        └── package.json


