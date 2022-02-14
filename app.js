const quiz = [
{
question: '日本の首都は、次のうちどれでしょう？',
answers: [
'北海道',
'沖縄',
'神奈川',
'東京'
],
correct:'東京'
},{
question: '「こんにゃく」、を漢字で書いた時、共通する部首は次のうちどれでしょう？',
answers: [
'しめすへん',
'くさかんむり',
'にくづき',
'きへん'
],
correct:'くさかんむり'
},{
question: '「archaeologist」を正しく日本語に訳したのは、次のうちのどれでしょう？  ',
answers: [
'考古学者',
'地理学者',
'代数学者',
'整形外科学者'
],
correct:'考古学者'
}
];

const quizLength = quiz.length;
let quizApp = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
// クイズの問題文、選択肢を定義
const setupQuiz = () => {

document.getElementById('js-question').textContent = quiz[quizApp].question;

let buttonApp = 0;
while(buttonApp < buttonLength){
// ここに命令
 $button[buttonApp].textContent = quiz[quizApp].answers[buttonApp];
 buttonApp++;
}
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizApp].correct === e.target.textContent){
  window.alert('正解！');
  score++;
}　else {
  window.alert('不正解');
}

quizApp++;

if(quizApp < quizLength) {
setupQuiz();
} else {
  window.alert('終了!あなたの正解数は'+ score + '/' + quizLength + 'です！');
}
};

// クリックしたら正誤判定
let handlerApp = 0
while (handlerApp < buttonLength) {
$button[handlerApp].addEventListener('click', (e) => {
 clickHandler(e);
});
handlerApp++;
}
