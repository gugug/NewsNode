import React from "react"
import { connect } from "react-redux"


const d3 = require("d3");
const cloud = require("d3-cloud")





class Cloud extends React.Component {
	constructor(props) {
		super(props);

	}
	drawCloud(wordsList, weight) {
		// wordsList = [ "谢杏芳","林丹","中国体育","比赛","出轨","最大危机","赵雅琪","模范夫妻", "泥潭中求生"];
		// weight = [5, 8, 1, 12,75, 4, 45, 35, 23];
		// 定义多种颜色的词云
		var fill = function(i) {
			return d3.schemeCategory20[i];
		}

		// 定义draw用以绘制词云
		var draw = function(words) {

		  d3.select("#wordCloud").append("svg")
		      .attr("width", layout.size()[0])
		      .attr("height", layout.size()[1])
		    .append("g")
		      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
		    .selectAll("text")
		      .data(words)
		    .enter().append("text")
		      .style("font-size", function(d) { return d.size + "px"; })
		      .style("font-family", "Impact")
		      .style("fill", function(d, i) { return fill(i); })
		      .attr("text-anchor", "middle")
		      .attr("transform", function(d) {
		        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
		      })
		      .text(function(d) { return d.text; });
		}

		// 配置词云的样式
		var layout = cloud()
				    .size([450, 450])
				    .words(wordsList.map(function(d, i) {
				      return {text: d, size: 14 + weight[i] * 6, test: "haha"};
				    }))
				    .padding(5)
				    .rotate(function() { return ~~(Math.random() * 2) * 90; })
				    .font("Impact")
				    .fontSize(function(d) { return d.size; })
				    .on("end", draw);
		
		// 开始绘制		    // 
		layout.start();
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		this.drawCloud(nextProps.keywords.wordsList, nextProps.keywords.weightList);
	}

	render() {
		return (
			<div className="word-cloud">
				<div className="c-container">
					<h2 className="sub-title">关键词</h2>
			 		<div id="wordCloud"></div>
			 	</div>
				
			</div>
		);
	}


}

const mapStateToProps = (state) => ({
	keywords: state.keywords
})

export default connect(mapStateToProps, null)(Cloud);

