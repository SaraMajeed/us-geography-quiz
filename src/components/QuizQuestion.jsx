export default class QuizQuestion {
  constructor(args) {
    this.question = args.question; // question text
    this.correctAnswer = args.correctAnswer; // correct answer
    this.answer = args.answer; // user answer
    this.answers = args.answers // array of possible answers for multiple choice
    this.type = args.type; // type of question (text, dropdown, checkbox, radio)
  }

  get isCorrect() {
    return this.correctAnswer === this.answer;
  }
}