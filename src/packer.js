const Packer = function(w, h) { 
  this.init(w, h);
};

export default Packer;

Packer.prototype = {

  init: function(w, h) {
    this.root = { x: 0, y: 0, w: w, h: h };
  },

  fit: function(blocks, rate) {
    let i, childRoot, block;
    
    for (i = 0; i < blocks.length; i++) {      
      block = blocks[i];
      if ((childRoot = this.findChildRoot(this.root, block.w, block.h))){
        block.fit = this.splitChildRoot(childRoot, block.w, block.h);
      }      
    }
  },

  findChildRoot: function(root, w, h) {   
    if (root.used)
      return this.findChildRoot(root.right, w, h) || this.findChildRoot(root.down, w, h);
    else if ((w <= root.w) && (h <= root.h))
      return root;
    else
      return  null;
  },

  splitChildRoot: function(childRoot, w, h) {
    childRoot.used = true;
    childRoot.down  = { x: childRoot.x,     y: childRoot.y + h, w: childRoot.w,     h: childRoot.h - h };
    childRoot.right = { x: childRoot.x + w, y: childRoot.y,     w: childRoot.w - w, h: h          };
    return childRoot;
  }
}