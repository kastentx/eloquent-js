var box = {
  locked: true,
  unlock: function() {this.locked = false},
  lock: function() {this.locked = true},
  _content: ['secretsauce'],
  get content() {
    if (this.locked) throw new Error('Locked!')
    return this._content
  }
}

function withBoxUnlocked(func) {
  try {
    func(box._content)
  } catch(err) {
    console.log(err.message)
  } finally {
    this.locked = true
  }
}

withBoxUnlocked(console.log)
