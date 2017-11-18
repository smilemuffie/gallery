require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片数据
let data = require('../data');
let imgDatas = data.imgData
//将图片信息转化为URL地址
imgDatas=(function getImgURL(imgDataArr){
  for(var i=0,j=imgDataArr.length;i<j;i++){
    var singleImgData = imgDataArr[i]
    singleImgData.imgURL = require(`../images/${singleImgData.fileName}`)
    imgDataArr[i] = singleImgData
  }
  return imgDataArr
})(imgDatas)

class ImgFigure extends React.Component{
  render(){
    return(
      <figure className="img-figure">
        <img src={this.props.data.imgURL} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}

class AppComponent extends React.Component{
  render() {
    var imgFigures = [],
        controllerUnits = [];
    imgDatas.forEach(function(item){
      imgFigures.push(<ImgFigure data={item} key={item.imgURL}/>)
    })
    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
