class Shape {
  constructor(shapeColor, textColor, text) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
      this.text = text;
  }
}
  
  class Circle extends Shape {
    generate() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    generate() {
      return '<polygon points="150, 50 100, 150 200, 150" fill="${this.color}" />';
    }
  }
  
  class Square extends Shape {
    generate() {
      return '<rect x="100" y="50" width="100" height="100" fill="${this.color}" />';
    }
  }
  
  module.exports = {
    Circle,
    Triangle,
    Square,
  };
  