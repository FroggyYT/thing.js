var col = [
	{"question": "A scientist is studying a biome that experiences large seasonal fluctuations in both temperature and precipitation patterns.", "answer": "Generalists would be most abundant, because the resources available would be constantly changing."},
	{"question": "Which of the following best describes a difference between generalist species and specialist species?", "answer": "Generalists use a large range of resources, while specialists have a limited range of resources they use to survive."},
	{"question": "A variety of plants and animals inhabit a forest ecosystem. Which statement correctly explains why certain organisms would be more likely to survive than others if a forest fire burned the area?", "answer": "Generalist species are more likely to survive because they can thrive in a wide variety of environmental conditions and can make use of a variety of different resources."},
	{"question": "Based on the description and the data table above, which of the following combinations best classifies the song sparrow?", "answer": "r-strategist and generalist"},
	{"question": "The graphs below show changes in a population over time. The dashed line represents the carrying capacity of the species. Which of the following graphs best shows the population size of a K-selected species over time in a stable environment?", "answer": "graph with squiggly lines"},
	{"question": "Which of the following claims is best supported by the data in the table?", "answer": "The black rhino is a K-selected species because it has a low number of offspring per reproductive event."},
	{"question": "Based on the survivorship curves shown below, which of the following is a possible reason for the change in the shape of the curve from 1900 to 1980?", "answer": "improvements in health-care services and medical research"},
	{"question": "Which of the following is a characteristic of an organism that displays a Type III survivorship curve, as shown in the graph above?", "answer": "The organism produces large numbers of offspring every time it reproduces."},
	{"question": "Which of the following claims best supports the classification of bees as an organism that displays a Type II survivorship curve, as shown in the graph above?", "answer": "Away from the colony, bees experience a constant probability of death per unit time as a foraging species."},
	{"question": "Based on the trends shown in the table, in which of the following years was the owl population at carrying capacity?", "answer": "2015"},
	{"question": "Which of the following claims is best supported by the data shown in the table above?", "answer": "The owl population experienced population overshoot between 1995 and 2000 because of increased competition for resources."},
	{"question": "Researchers monitored the number of reindeer over time on an island off the coast of Alaska. The reindeer were introduced in year 1, and the population size was counted every 5 years. The data are shown in the table above. Which of the following claims about trends in the population size over time is best supported by the data?", "answer": "The population exceeded the carrying capacity of the island, which led to a decrease in the population size following extreme resource depletion."},
	{"question": "In a given country, the population size is decreasing because there are fewer prereproductive-aged individuals in the population. Which of the age structure diagrams best illustrates the population of this country?", "answer": "a"},
	{"question": "Which of the following statements best describes the pattern seen in age structure diagram C?", "answer": "There is an imbalance between males and females, with a ratio of 1.5 men to every woman in the population."},
	{"question": "Which of the age structure diagrams best illustrates a county that has a stable population size and slow or no population growth?", "answer": "D"},
	{"question": "Which of the following best describes the trends seen in the total fertility rates for the world population from 1950 to the projected rates in 2040 ?", "answer": "total fertility rates declined rapidly from 1960 to 2000 because women had children later in life as a result of increased educational opportunities."},
	{"question": "Based on the data in the graph, what was the average number of children born per woman in less-developed regions in 1975 ?", "answer": "4.7"},
	{"question": "Based on the data in the graph, when did more-developed regions first reach replacement level fertility?", "answer": "1970"},
	{"question": "Based on current trends and patterns, which of the following statements best predicts how the human population will change over the next 50 years?", "answer": "As the population density increases, there will be an increase in disease transmission, leading to increased mortality."},
	{"question": "The rule of 70 can be used to determine a population's doubling time. Doubling time is a measure of the", "answer": "population growth rate"},
	{"question": "Which of the following density-independent factors can affect the size of a human population?", "answer": "Heat waves"},
	{"question": "Which of the following statements best describes why birth and death rates are changing in a country that is in Phase 2 of the demographic transition?", "answer": "Individuals have better sanitation and access to clean drinking water."},
	{"question": "A country is currently in the second stage of the demographic transition. Currently the country has a birth rate of 37.9 births per 1,000 individuals and a death rate of 13.4 deaths per 1,000 individuals.Which of the following changes would indicate that the country is moving from the second stage into the third stage of the demographic transition?", "answer": "The birth rate declines to 25.3 births per 1,000 individuals."},
	{"question": "The demographic transition model describes population change over time as a country becomes more developed. Age-structure diagrams describe how populations are distributed across age ranges. Which of the following age-structure diagrams best displays the age ranges in a country that is in stage 2 of the demographic transition?", "answer": "An expansive pyramid age-structure diagram"}
];

var count = document.getElementsByClassName("item counters")[0].textContent.split(" ")[0];
var qEl = document.getElementsByClassName("lrn_question")[count - 1];
var question = qEl.textContent;

var a = document.getElementsByClassName("lrn-response-validate-wrapper lrn_mcqgroup lrn_mcqgroup-vertical custom-responses");
var aEl = a[a.length - 1];
var choices = Array.from(aEl.children);

class Choice {
	constructor(el) {
		this.el = el;
		this.text = this.el.textContent;
	}
	
	test(t) {
		var halfString = Math.floor(t.length / 2);
		var quarterString = Math.floor(t.length / 4);
		var midString = t.substring(halfString - quarterString, halfString + quarterString);
		
		return new RegExp(midString).test(this.text);
	}
}

var choiceObjs = [];

choices.forEach((v, i) => {
	choiceObjs.push(new Choice(v));
});

var qhalfString = Math.floor(question.length / 2);
var qquarterString = Math.floor(question.length / 4);

var qmidString = question.substring(qhalfString - qquarterString, qhalfString + qquarterString);

col.forEach((v, i) => {
    var r = new RegExp(qmidString);
	if (r.test(v.question)) {
		console.log(v.answer);
		
		choiceObjs.forEach((j, k) => {
			if (j.test(v.answer)) {
				j.el.click();
			}
		});
	}
});
