var questions = document.getElementsByClassName("accordion");

for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function () {
        var title = this.getElementsByClassName("title")[0];
        var arrow = this.getElementsByTagName("img")[0];
        var answer = this.getElementsByClassName("faq-answer")[0];

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            title.style.fontWeight = 400;
            arrow.style.transform = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            title.style.fontWeight = 700;
            arrow.style.transform = "rotate(180deg)";
        }

    });
}