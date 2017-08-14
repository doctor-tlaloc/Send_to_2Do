// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.tabId, {file: "tab_info_collector.js"}, function(result) {
    SendTo2Do.loadTemplates(function(templates) {
      result = result[0];
      var name = SendTo2Do.formatTemplate(templates.title_template, result);
      var note = SendTo2Do.formatTemplate(templates.note_template, result);
      var link = SendTo2Do.formatTemplate(templates.link_template, result);
      var list = SendTo2Do.formatTemplate(templates.list_template, result);
      var starred = SendTo2Do.formatTemplate(templates.starred_template, result);
      var priority = SendTo2Do.formatTemplate(templates.priority_template, result);
      var view = SendTo2Do.formatTemplate(templates.view_template, result);
      var url = "twodo://x-callback-url/add?task=" + encodeURIComponent(name) + "&forlist=" + 
      encodeURIComponent(list) + "&note=" + encodeURIComponent(note) + "&priority=" + 
      encodeURIComponent(priority) + "&starred=" + encodeURIComponent(starred) + "&action=url:" + 
      encodeURIComponent(link) + "&useQuickEntry=" + encodeURIComponent(view);

      document.body.insertAdjacentHTML("afterEnd", '<iframe src="' + url + '" style="display:none" />');
    });
  });
  return true;
});
