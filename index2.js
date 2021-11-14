const quiz = [
    {
        question:"ゲーム「スーパーマリオブラザーズ」で、食べるとマリオが大きくなるキノコは何色をしている？",
        answers:[
            "茶色",
            "黄色",
            "赤色",
            "青色"
        ],
        correct:"赤色"
    },{
        question:"ゲーム「ドラゴンクエストⅡ」でやまびこのふえを吹くとこだまが返ってくるのはどんなアイテムがある場所？",
        answers:[
            "小さなメダル",
            "紋章",
            "光の玉",
            "オーブ"
        ],
        correct:"紋章"
    },{
        question:"1983年にファミコンが発売された当時のソフト1本の値段は何円均一だった？",
        answers:[
            "2800円",
            "3800円",
            "4800円",
            "5800円"],
        correct:"3800円"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const setUpQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    };
};

setUpQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解！")
        score++;
    } else {
        window.alert("不正解！");
    }
    
    quizIndex++;

    if(quizIndex < quizLength){
        setUpQuiz();
    } else {
        window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！")
    }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click",(e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
