var MetaMessage = {
  collapse: function(messages) {
    var messageCollector = [];

    for (idx in messages) {
      var lastIdx = messageCollector.length - 1;
      if ((lastIdx >= 0) && (messages[idx].sender === messageCollector[lastIdx].sender)) {
        messageCollector[lastIdx].contents.push(messages[idx].content);
      } else {
        messageCollector.push({ sender: messages[idx].sender, contents: [messages[idx].content] });
      }
    }

    return messageCollector;
  }
}

module.exports = MetaMessage;
