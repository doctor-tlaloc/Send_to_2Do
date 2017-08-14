window.SendTo2Do = (function() {
  var storage = chrome.storage.sync;
  var defaultTitleTemplate = '%title%';
  var defaultNoteTemplate = '%selection%';
  var defaultLinkTemplate = '%url%';
  var defaultListTemplate = 'Links';
  var defaultStarredTemplate = '0';
  var defaultPriorityTemplate = '0';
  var defaultViewTemplate = '0';

  return {
    loadTemplates: function(callback) {
      storage.get({
        "title_template": defaultTitleTemplate,
        "note_template": defaultNoteTemplate,
        "link_template": defaultLinkTemplate,
        "list_template": defaultListTemplate,
        "starred_template": defaultStarredTemplate,
        "priority_template": defaultPriorityTemplate,
        "view_template": defaultViewTemplate
      }, function(templates) {
        callback(templates);
      });
    },

    saveTemplate: function(name, value) {
      var payload = {};
      payload[name] = value;
      storage.set(payload);
    },

    formatTemplate: function(template, params) {
      return template
        .replace("%title%", params.title)
        .replace("%url%", params.url)
        .replace("%selection%", params.selection);
    }
  };
})();
