# Error while building react native app

I tried to create a new project using react-native

```bash
npx react-native init Navigator --template react-native-template-typescript
```

After that, I tried to create the production files for Android using the command

```bash
cd android && ./gradlew assembleRelease
```

And it worked. But when I try to add some configuration to the initial project, the build starts to throw some errors. One of them I was able to solve executing

```bash
mkdir android/app/src/main/assets && react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

But then, for some reason, if I try to create the bundle again I get the error

```
error index.js: Import statement may only appear at top level in file index.js at 4:2.
Error: Import statement may only appear at top level in file index.js at 4:2
    at minifyCode (/home/rafael/Documents/Library/react-native-error/node_modules/@react-native-community/cli-plugin-metro/node_modules/metro-transform-worker/src/index.js:99:13)
```

Using the last bundle file and then modifying the build command to

```bash
cd android && ./gradlew assembleRelease -x bundleReleaseJsAndAssets
```

I keep getting this error

```
Execution failed for task ':app:mapReleaseSourceSetPaths'.
> Error while evaluating property 'extraGeneratedResDir' of task ':app:mapReleaseSourceSetPaths'
   > Failed to calculate the value of task ':app:mapReleaseSourceSetPaths' property 'extraGeneratedResDir'.
      > Querying the mapped value of provider(java.util.Set) before task ':app:bundleReleaseJsAndAssets' has completed is not supported
```


I created some npm scripts to make it easy to execute this commands

npm run fix:bundle
npm run gradle:clean
npm run build:prod:android
