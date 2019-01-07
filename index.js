function generateOptionForm() {
    return `
    <main>
        <h1>Search National Parks by State</h1>
        <form id="js-park-search-form">
            <label for="js-select-state">Choose a state:</label>
            <select id="js-select-state">
            ${STATES.map(states => `<option value=${states.abbreviation}>${states.name}</option>`)}
            </select>
            <label for="limit">Enter a search limit</label>
            <input type="number" name="limit" id="limit" max="50">
            <input type="submit" value="Search">
        </form>
    </main>`
};  

// for (let i = 0; i < STATES.length; i++) {
//     <option value=${STATES[i].name}>${STATES[i].abbreviation}</option>
// }

// function startPage() {
// 	//Listen for button click to start quiz
// 	$('#js-start-section').on('click', '.js-start-button', e => {
// 		//show score and question number info
// 		$('#js-question-info').show();
// 		//Hide start section from view
// 		$('#js-start-section').hide();
// 		//increment current question;
// 		handleCurrentQuestionNumber();
// 		//load questions to question section
// 		$('#js-questions').html($(generateOptionForm()));
// 	});
// }