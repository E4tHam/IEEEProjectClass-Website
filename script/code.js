
/* code.js */

var code_instances = document.getElementsByClassName("code-HTML");
for ( var i = 0 ; i < code_instances.length ; i++ ) {
    let c = CodeMirror.fromTextArea(
        code_instances[i], {
            mode: "xml",
            lineNumbers: true,
            viewportMargin: Infinity,
            readOnly: "nocursor"
        }
    );
}



var code_instances = document.getElementsByClassName("code-CSS");
for ( var i = 0 ; i < code_instances.length ; i++ ) {
    let c = CodeMirror.fromTextArea(
        code_instances[i], {
            mode: "css",
            lineNumbers: true,
            viewportMargin: Infinity,
            readOnly: "nocursor"
        }
    );
}
