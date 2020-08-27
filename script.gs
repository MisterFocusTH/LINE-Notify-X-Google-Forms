function generateMessage(e) {
  var form = FormApp.openById('1UUR3NfUHpbN_PlSqgEeK4RsIdw-TFMMmXUmY2vWvnrg');
  var itemResponses = e.response.getItemResponses();
  var text_data = "New User Has Been Answered - มีผู้ใช้กรอกเเบบฟอร์มเข้ามาใหม่ !";
  for (var j = 0; j < itemResponses.length; j++) {
    var itemResponse = itemResponses[j];
    text_data += '\n' + itemResponse.getItem().getTitle() + ' : '+ itemResponse.getResponse()
  }
  sendNotification(text_data);
}

function sendNotification(text) {
  var formData = {
    'message': text,
  };
  var token = 'EuLDvOUoPp3sNVzG7zAWFflcZVW6vZBWVtAnDUizH1Y';
  var options = {
    'method' : 'post',
    'headers' : {'Authorization': "Bearer " + token},
    'contentType': 'application/x-www-form-urlencoded',
    'payload' : formData
  };
  UrlFetchApp.fetch('https://notify-api.line.me/api/notify', options);
}
