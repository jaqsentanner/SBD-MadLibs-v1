var clearButton = document.getElementById('button2')
var titleBox = document.getElementById('titleBlock');
var storyBox = document.getElementById('storyBlock');

function hideClear() {
    
    clearButton.style.display = "none";
};

hideClear();


function test() {

    var nounChoice = document.getElementById('nounAnswer').value;
    var verbChoice = document.getElementById('verbAnswer').value;
    var adjChoice = document.getElementById('adjAnswer').value;
    var advChoice = document.getElementById('advAnswer').value;
    


    const title = "A Tale of the Town";
    
    let story1 = `Two years ago on the 4th of July, ${nounChoice} got a little too twisted on the smoke
                  and sauce. The smell of ${adjChoice} sex lingered ${advChoice} in the air. Confused about
                  what was ruffing up the butthole.. ${nounChoice} had no choice but to ${verbChoice} back to
                  town carefully.`
    console.log(`${title} : ${story1}`);

    titleBox.textContent = title;
    titleBox.append = (title);
    storyBox.textContent = story1;
    storyBox.append = (story1);

    clearButton.style.display = 'inline';

    
};

function clearStory() {
    titleBox.textContent = '';
    storyBox.textContent = '';
    clearButton.style.display = 'none';
};



