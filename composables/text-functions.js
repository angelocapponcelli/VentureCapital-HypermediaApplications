/*
This is a file with composables (this example has only one).
Multiple function can be exported from a single file.
Multiple composable file can be created.
*/

// This function break each full stop with a <br> tag that creates a new line.
export function newLineOnFullStop(text) {
    console.log(text)
    return text.replaceAll('. ','.<br>')
}