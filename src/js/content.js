class Info {
  constructor() {
    this.tags = this.getTags()
  }

  getTags() {
    var tags_list = document.querySelector("#tags > div:nth-child(3) > span") 
    let list = [] 
    for (let i = 0; i < tags_list.childElementCount; i++) {
      var tag = tags_list.children[i].firstChild.textContent.toLowerCase()
      list.push(tag)
    }
    return list
  }
}

var get = new Info()


function check_tags() {
  var detected_tags_list = []

  chrome.storage.sync.get("blacklist",(res) => {
    let blacklist = res.blacklist
    for (let i = 0; i < get.tags.length; i++) {
      if (blacklist.includes(get.tags[i])) {
        detected_tags_list.push(get.tags[i])
      }
    }
    console.log(detected_tags_list.join());

  })
  // console.log(`detected tags: ${detected_tags_list}`);
  // console.log(detected_tags_list.join());
} 

check_tags()
