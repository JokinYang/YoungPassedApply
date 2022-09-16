// $request, $response, $notify(title, subtitle, message), console.log(message)
// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers, $response.body
//
// $prefs is for persistent store and the data of $prefs will be cleared when Quantumult X is deleted.
// $prefs.setValueForKey(value, key), $prefs.removeValueForKey(key), $prefs.removeAllValues(). Returns true or false, value and key should be string.
// $prefs.valueForKey(key) returns value.
//
// setTimeout(function() { console.log("abc"); }, 1000);
//
// You can optional change the response headers at the same time by using $done({body: modifiedBody, headers: modifiedHeaders}); only change the response headers is not allowed for script-response-body. The modifiedHeaders can be copied and modified from $response.headers, please do not change the content length, type and encoding field.
// Response status can also be optional changed by using $done({body: modifiedBody, headers: modifiedHeaders, status: modifiedStatus}), the modifiedStatus should be like "HTTP/1.1 200 OK"

var body = $response.body;
var obj = JSON.parse(body);

var data = obj['entities'][0]['data'];

var today = new Date();
var m = today.getMonth()<10?"0"+today.getMonth():today.getMonth();
var d = today.getDay()<10?"0"+today.getDay():today.getDay();
var date = today.getFullYear()+"-"+m+"-"+d+" ";

data['fieldEwm'] = "审批通过";
data['fieldOutOfTime'] = date+"06:00";
data['fieldBackToSchoolTime'] = date+"23:00";

console.log("You have passed the apply! ");

$done(JSON.stringify(obj));