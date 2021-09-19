(Get-Content ./server.js | Select-String "app.get") |
Foreach-Object {
    $text += ($_.tostring().split("'")[1]).replace("/", " ")
};
Set-Clipboard $text
