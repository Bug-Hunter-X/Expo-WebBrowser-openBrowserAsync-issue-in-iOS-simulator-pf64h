import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

WebBrowser.maybeCompleteAuthSession();

async function handlePress() {
  Linking.addEventListener('url', handleUrl);
  let result = await WebBrowser.openBrowserAsync('https://example.com');
  console.log('result from openBrowserAsync', result); //this will print empty object in iOS Simulator, but will give result in Android.
}

function handleUrl(event) {
  console.log('url event', event);
  Linking.removeEventListener('url', handleUrl);
}

// ...rest of the component code...