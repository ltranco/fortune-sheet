export default class clipboard {
  static writeHtml(str: string) {
    navigator.clipboard.writeText(str);
    // https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
  }
}
