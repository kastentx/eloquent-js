// StretchCell
// lets you specify a minimum width and height
// will always draw at least that size, if not larger (when text needs it)

function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}
StretchCell.prototype.minWidth = function() {
  return Math.max(this.width || this.inner.minWidth());
}
StretchCell.prototype.minHeight = function() {
  return Math.max(this.height || this.inner.minHeight());
}
StretchCell.prototype.draw = function(width, height) {
  var stretchWidth = Math.max(this.minWidth() || width);
  var stretchHeight = Math.max(this.minHeight() || height);
  
  return this.inner.draw(stretchWidth, stretchHeight);
}
