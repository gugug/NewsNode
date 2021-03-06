
export const topics = (state = [], action) => {
	switch (action.type) {
		
		case 'SAVE_TOPICS':
			return action.topics;
		default: 
			return state;
	}
}

function overideAssign(state, action) {
	if(Object.assign) {
		return Object.assign({}, state, action);
	} else {

		for(var props1 in state) {
			for(var props2 in action) {
				if(props1 == props2) {
					state[props1] = action[props2];
				}
			}
		}
	}

	return state;
}

export const report = (state = {}, action) => {
	switch (action.type) {
		case 'SAVE_REPORT_NUM':
			return action.reportNum;

		default: 
			return state;
	}
}
var keyIn = {
	weightList: [],
	wordsList: []
}
export const keywords = (state = keyIn, action) => {
	switch (action.type) {
		case 'SAVE_KEYWORDS':
			return action.keywords;

		default: 
			return state;
	}
}
var reportIn = {
	emotion: [],
	report: []
}
export const percent = (state = reportIn, action) => {
	switch (action.type) {
		case "SAVE_PERCENT": 
			return action.percent;

		default: 
			return state;
	}
}



export const banner = (state = {}, action) => {
	switch (action.type) {
		case "SAVE_BANNER": 
			return action.banner;
		default: 
			return state;
	}
}

// const getSlideState = (state, action) => {
// 	if(action.current <= (state.total-1) && action.current >= 0){
// 		return Object.assign({}, state, action);
// 	} else {
// 		return state;
// 	}
// }