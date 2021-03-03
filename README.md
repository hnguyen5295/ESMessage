# Do the following steps to run program
1 - npm i OR yarn
2 - yarn start --reset-cache
3 - react-native run-ios
4 - Modifying your app: Hit ⌘R in your iOS Simulator to reload the app and see your changes!


# Testflight build: Please follow the instruction here: https://www.raywenderlich.com/10868372-testflight-tutorial-ios-beta-testing

Xcode build version config:
Version: 1.0 => Build: 1.0.1

For testing purpose:
- Version: 1.0 => Build: 1.0.1
- Version: 1.0 => Build: 1.0.2
- Version: 1.0 => Build: 1.0.3
- Version: 1.0 => Build: 1.0.4
Prod build: can pick any testing version for prod build
- Version: 1.0 => Build: 1.1


** FIX ISSUE **

1/ React/RCTBridgeDelegate.h' file not found
- Open the terminal and go to your project ios directory
- Type in pod init (If it doesn't exist) and then pod install
- Open the workspace project and delete the build from ios folder
- Run react-native run-ios from termin

https://stackoverflow.com/questions/56916798/react-rctbridgedelegate-h-file-not-found

2/ Typedef redefinition with different types ('uint8_t' (aka 'unsigned char') vs 'enum clockid_t') when building latest react-native rc with macOS target
https://github.com/facebook/flipper/issues/834

________________________
Looking a few lines above the clockit_t typedef in Flipper-Foly Time.h

* changed __IPHONE_10_0 to __IPHONE_12_0 (as my target iOS version is 11) and got it working. I guess the same can be done for MAC_OS_X_VERSION_10_12 to MAC_OS_X_VERSION_10_15 if you are targeting macOS.
________________________


3/ 'event2/event-config.h' file not found
https://stackoverflow.com/questions/66019068/event2-event-config-h-file-not-found

In Podfile I Found every one is using

* use_flipper!({ 'Flipper-Folly' => '2.3.0' })

4/ Build failed with error: Undefined symbol: ___darwin_check_fd_set_overflow

comment all flipper function in podfile
remove flipperInit in appDelegate
remove openSSl in podfile.lock
pod install,
clean project
run again

https://stackoverflow.com/questions/64527275/build-failed-with-error-undefined-symbol-darwin-check-fd-set-overflow

5/ No bundle URL present [fixed]
https://onexlab-io.medium.com/no-bundle-url-present-fixed-ca2688a80f66

6/ Invariant Violation: requireNativeComponent: “RNCWebView” was not found in the UIManager
https://stackoverflow.com/questions/61832232/invariant-violation-requirenativecomponent-rncwebview-was-not-found-in-the-u


7/ No visible @interface for 'NSHTTPURLResponse' declares the selector 'valueForHTTPHeaderField:'
react-native-webview@8.0.0 works fine.
https://github.com/react-native-webview/react-native-webview/issues/1353

