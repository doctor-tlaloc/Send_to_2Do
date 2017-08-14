(function() {
  var exampleParams = {
    title: "An important page title",
    selection: "important page fragment",
    url: "http://page-to-read-later.com"
  };

  function enableEditing(editSelector, exampleSelector, templateName) {
    var edit = document.querySelector(editSelector);
    var example = document.querySelector(exampleSelector);

    var updateExample = function() {
      example.value =
        SendTo2Do.formatTemplate(edit.value, exampleParams);
    };

    
    edit.addEventListener("change", function() {
      SendTo2Do.saveTemplate(templateName, edit.value);
      updateExample();
    });

    SendTo2Do.loadTemplates(function(templates) {
      edit.value = templates[templateName];
      updateExample();
    });
  }

  enableEditing("#title_template", "#title_example", "title_template");
  enableEditing("#note_template", "#note_example", "note_template");
  enableEditing("#list_template", "#list_example", "list_template");
  enableEditing("#starred_template", "#starred_example", "starred_template");
  enableEditing("#priority_template", "#priority_example", "priority_template");
  enableEditing("#view_template", "#view_example", "view_template");
})();
