const CARD_LIBRARY = [
  {
    title: "U.S. Constitution",
    answer: "law",
    explanation: "A constitution is a foundational primary source of law.",
  },
  {
    title: "Pennsylvania Constitution",
    answer: "law",
    explanation: "A state constitution is a primary source of law for that state.",
  },
  {
    title: "Federal statute",
    answer: "law",
    explanation: "A statute enacted by Congress is a primary source of law.",
  },
  {
    title: "Pennsylvania statute",
    answer: "law",
    explanation: "A statute enacted by the state legislature is a primary source of law.",
  },
  {
    title: "U.S. Supreme Court opinion",
    answer: "law",
    explanation: "A judicial opinion is a primary source of law.",
  },
  {
    title: "Pennsylvania Supreme Court opinion",
    answer: "law",
    explanation: "A state supreme court opinion is a primary source of law.",
  },
  {
    title: "Federal regulation",
    answer: "law",
    explanation: "A properly issued agency regulation is a primary source of law.",
  },
  {
    title: "Pennsylvania regulation",
    answer: "law",
    explanation: "A state agency regulation is a primary source of law.",
  },
  {
    title: "Pennsylvania Rules of Civil Procedure",
    answer: "law",
    explanation: "Court rules are authoritative rules that govern legal proceedings.",
  },
  {
    title: "Local court rule",
    answer: "law",
    explanation: "A valid local court rule governs practice in that court.",
  },
  {
    title: "Voting Rights Act of 1965",
    answer: "law",
    explanation: "The Voting Rights Act is a federal statute enacted by Congress.",
  },
  {
    title: "National Voter Registration Act",
    answer: "law",
    explanation: "This act is a federal statute governing voter registration for federal elections.",
  },
  {
    title: "Help America Vote Act",
    answer: "law",
    explanation: "This act is a federal statute that sets requirements for election administration.",
  },
  {
    title: "Pennsylvania Election Code",
    answer: "law",
    explanation: "The Election Code is statutory law enacted by Pennsylvania's legislature.",
  },
  {
    title: "Federal Rules of Evidence",
    answer: "law",
    explanation: "These rules govern evidence in federal courts and have legal authority.",
  },
  {
    title: "Federal Rules of Criminal Procedure",
    answer: "law",
    explanation: "These authoritative court rules govern federal criminal proceedings.",
  },
  {
    title: "Federal Rules of Appellate Procedure",
    answer: "law",
    explanation: "These authoritative rules govern appeals in federal courts.",
  },
  {
    title: "Federal Rules of Bankruptcy Procedure",
    answer: "law",
    explanation: "These authoritative court rules govern federal bankruptcy proceedings.",
  },
  {
    title: "Pennsylvania Rules of Evidence",
    answer: "law",
    explanation: "These court rules govern evidence in Pennsylvania proceedings.",
  },
  {
    title: "United States Code provision",
    answer: "law",
    explanation: "The United States Code organizes federal statutes currently in force.",
  },
  {
    title: "Code of Federal Regulations provision",
    answer: "law",
    explanation: "The Code of Federal Regulations contains rules issued by federal agencies.",
  },
  {
    title: "City ordinance",
    answer: "law",
    explanation: "A valid ordinance is law enacted by a local legislative body.",
  },
  {
    title: "Published U.S. Court of Appeals opinion",
    answer: "law",
    explanation: "A court of appeals opinion is a primary legal source. Its binding effect depends on jurisdiction.",
  },
  {
    title: "Pennsylvania Superior Court opinion",
    answer: "law",
    explanation: "A state appellate opinion is a primary source of case law.",
  },
  {
    title: "Federal district court opinion",
    answer: "law",
    explanation: "A judicial opinion is a primary legal source, though its precedential weight may vary.",
  },
  {
    title: "Legal textbook",
    answer: "not-law",
    explanation: "A textbook explains law, but it does not itself create law.",
  },
  {
    title: "Law review article",
    answer: "not-law",
    explanation: "A law review article analyzes or argues about law. It is a secondary source.",
  },
  {
    title: "Wikipedia article about a case",
    answer: "not-law",
    explanation: "Wikipedia can summarize a case, but the court's opinion is the primary source.",
  },
  {
    title: "Westlaw headnote",
    answer: "not-law",
    explanation: "A headnote is an editor's research aid, not part of the court's opinion.",
  },
  {
    title: "Legal encyclopedia",
    answer: "not-law",
    explanation: "A legal encyclopedia summarizes law. It is a secondary source.",
  },
  {
    title: "Lawyer's brief",
    answer: "not-law",
    explanation: "A brief argues for a result, but it is not itself legal authority.",
  },
  {
    title: "Complaint filed by a plaintiff",
    answer: "not-law",
    explanation: "A complaint states a party's allegations. It does not create legal authority.",
  },
  {
    title: "Jury instruction guide",
    answer: "not-law",
    explanation: "A guide may help explain instructions, but the guide itself is not law.",
  },
  {
    title: "Black's Law Dictionary",
    answer: "not-law",
    explanation: "A legal dictionary defines terms. It is a research aid, not a primary source.",
  },
  {
    title: "Bill introduced but not enacted",
    answer: "not-law",
    explanation: "A proposed bill does not become law unless it completes the required enactment process.",
  },
  {
    title: "Proposed federal regulation",
    answer: "not-law",
    explanation: "A proposed rule invites review and comment. It is not yet a final regulation.",
  },
  {
    title: "Nonprofit voter guide",
    answer: "not-law",
    explanation: "A voter guide provides information, but it does not create election law.",
  },
  {
    title: "Candidate's campaign platform",
    answer: "not-law",
    explanation: "A campaign platform states policy goals. It is not enacted law.",
  },
  {
    title: "News article about voting rights",
    answer: "not-law",
    explanation: "A news article reports on the law, but it is not a primary legal source.",
  },
  {
    title: "County election office FAQ",
    answer: "not-law",
    explanation: "An FAQ explains election procedures. The governing statutes and regulations are the law.",
  },
  {
    title: "Official election results report",
    answer: "not-law",
    explanation: "An election report records results, but it does not create a legal rule.",
  },
  {
    title: "Voter registration form",
    answer: "not-law",
    explanation: "A registration form collects information. It is not itself election law.",
  },
  {
    title: "Legal blog post",
    answer: "not-law",
    explanation: "A blog post may discuss legal issues, but it is not a primary source of law.",
  },
  {
    title: "Continuing legal education slides",
    answer: "not-law",
    explanation: "Training slides explain legal topics. They do not create law.",
  },
  {
    title: "Student's case brief",
    answer: "not-law",
    explanation: "A case brief summarizes a judicial opinion. The opinion itself is the primary source.",
  },
  {
    title: "Court docket summary",
    answer: "not-law",
    explanation: "A docket summary tracks a case's filings and events. It is not a source of law.",
  },
  {
    title: "Legislative committee report",
    answer: "not-law",
    explanation: "A committee report can help explain legislation, but it is not enacted law.",
  },
  {
    title: "Sample contract form",
    answer: "not-law",
    explanation: "A sample form is a drafting aid, not a legal rule created by an authority.",
  },
  {
    title: "Trial transcript",
    answer: "not-law",
    explanation: "A transcript records what happened in court. It does not itself establish a legal rule.",
  },
  {
    title: "Jury verdict",
    answer: "not-law",
    explanation: "A verdict decides a case's facts and outcome. It is not a source of legal rules.",
  },
];

const ROUND_LENGTH = 10;

const gameScreen = document.querySelector("#game-screen");
const endScreen = document.querySelector("#end-screen");
const card = document.querySelector("#card");
const cardTitle = document.querySelector("#card-title");
const feedback = document.querySelector("#feedback");
const feedbackStatus = document.querySelector("#feedback-status");
const feedbackText = document.querySelector("#feedback-text");
const answerActions = document.querySelector("#answer-actions");
const answerButtons = [...document.querySelectorAll("[data-answer]")];
const nextButton = document.querySelector("#next-button");
const playAgainButton = document.querySelector("#play-again-button");
const progress = document.querySelector("#progress");
const scoreText = document.querySelector("#score");
const finalScore = document.querySelector("#final-score");

let deck = [];
let cardIndex = 0;
let score = 0;
let answered = false;

function shuffled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function buildBalancedDeck() {
  const lawCards = shuffled(CARD_LIBRARY.filter((item) => item.answer === "law")).slice(0, 5);
  const notLawCards = shuffled(CARD_LIBRARY.filter((item) => item.answer === "not-law")).slice(0, 5);
  return shuffled([...lawCards, ...notLawCards]);
}

function updateMeta() {
  progress.textContent = `${Math.min(cardIndex + 1, ROUND_LENGTH)} / ${ROUND_LENGTH}`;
  scoreText.textContent = `${score} right`;
}

function showCard() {
  const current = deck[cardIndex];
  answered = false;
  cardTitle.textContent = current.title;
  feedback.hidden = true;
  answerActions.hidden = false;
  nextButton.hidden = true;
  card.classList.remove("is-correct", "is-close", "reveal", "card-enter");
  void card.offsetWidth;
  card.classList.add("card-enter");
  updateMeta();
  card.focus({ preventScroll: true });
}

function chooseAnswer(choice) {
  if (answered) return;

  answered = true;
  const current = deck[cardIndex];
  const isCorrect = choice === current.answer;

  if (isCorrect) score += 1;

  feedbackStatus.textContent = isCorrect ? "Yes. You got it." : "Not quite.";
  feedbackText.textContent = current.explanation;
  feedback.hidden = false;
  answerActions.hidden = true;
  nextButton.hidden = false;
  card.classList.remove("card-enter");
  card.classList.add(isCorrect ? "is-correct" : "is-close", "reveal");
  updateMeta();
  nextButton.focus({ preventScroll: true });
}

function showEndScreen() {
  gameScreen.hidden = true;
  endScreen.hidden = false;
  progress.textContent = `${ROUND_LENGTH} / ${ROUND_LENGTH}`;
  finalScore.textContent = `${score} out of ${ROUND_LENGTH}`;
  playAgainButton.focus({ preventScroll: true });
}

function nextCard() {
  if (!answered) return;
  cardIndex += 1;
  if (cardIndex >= ROUND_LENGTH) {
    showEndScreen();
    return;
  }
  showCard();
}

function startGame() {
  deck = buildBalancedDeck();
  cardIndex = 0;
  score = 0;
  gameScreen.hidden = false;
  endScreen.hidden = true;
  showCard();
}

answerButtons.forEach((button) => {
  button.addEventListener("click", () => chooseAnswer(button.dataset.answer));
});

nextButton.addEventListener("click", nextCard);
playAgainButton.addEventListener("click", startGame);

document.addEventListener("keydown", (event) => {
  if (gameScreen.hidden) return;
  const key = event.key.toLowerCase();
  if (!answered && key === "l") chooseAnswer("law");
  if (!answered && key === "n") chooseAnswer("not-law");
  if (answered && event.key === "Enter" && document.activeElement !== nextButton) {
    event.preventDefault();
    nextCard();
  }
});

startGame();
