# Expo WebBrowser openBrowserAsync Issue in iOS Simulator

This repository demonstrates a bug encountered when using `expo-web-browser`'s `openBrowserAsync` function in an iOS simulator. The URL opens correctly in Safari, but the `result` object returned by the function is empty.  This makes it impossible to handle the result of the browser interaction within the app.

## Bug Description

The `openBrowserAsync` function from `expo-web-browser` opens URLs in the system browser (Safari on iOS Simulator). However, in iOS Simulator the function consistently returns an empty object instead of providing information on whether the browser successfully opened the URL, or the result of any user action in the browser. 

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Open the app in the iOS simulator.
5. Press the button; observe that the URL opens in Safari, but the console logs an empty object.

## Expected Behavior

The `openBrowserAsync` function should return an object containing information about the browser session, such as whether it was successfully opened and any user-related actions within the browser (e.g., cancellation).

## Solution

The solution provided in `bugSolution.js` demonstrates a workaround that intercepts the URL in the application's URL scheme and uses `Linking` to handle the results.