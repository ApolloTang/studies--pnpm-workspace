```
% diff  -Nr ../workspace ../workspace-with-workspace-protocol  (only sure relevent output)


diff -Nr ../workspace/pkgs-consumer/consumer-pkg-x/package.json ../workspace-with-workspace-protocol/pkgs-consumer/consumer-pkg-x/package.json
9c9
<     "@apollotang/local-pkg-b": "1.0.0"
---
>     "@apollotang/local-pkg-b": "workspace:*"


diff -Nr ../workspace/pkgs-consumer/consumer-pkg-y/package.json ../workspace-with-workspace-protocol/pkgs-consumer/consumer-pkg-y/package.json
9c9
<     "@apollotang/local-pkg-d": "1.0.0",
---
>     "@apollotang/local-pkg-d": "workspace:*",


diff -Nr ../workspace/pkgs-local/local-pkg-b/package.json ../workspace-with-workspace-protocol/pkgs-local/local-pkg-b/package.json
8c8
<     "@apollotang/local-pkg-d": "1.0.0"
---
>     "@apollotang/local-pkg-d": "workspace:*"

```