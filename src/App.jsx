import React, { useState } from 'react'
import './App.css'

function App() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState([])

  const quizQuestions = [
    {
      question: '炭治郎が使う呼吸の型は？',
      options: ['水の呼吸', '雷の呼吸', '炎の呼吸', '風の呼吸'],
      correct: 0
    },
    {
      question: '禰豆子が口にくわえているものは？',
      options: ['竹筒', '木の棒', '布', '何もない'],
      correct: 0
    },
    {
      question: '善逸が使う呼吸の型は？',
      options: ['水の呼吸', '雷の呼吸', '炎の呼吸', '獣の呼吸'],
      correct: 1
    },
    {
      question: '伊之助が被っているものは？',
      options: ['帽子', '猪の頭', '仮面', 'ヘルメット'],
      correct: 1
    },
    {
      question: '最強の鬼の名前は？',
      options: ['鬼舞辻無惨', '累', '響凱', '下弦の壱'],
      correct: 0
    },
    {
      question: '炭治郎の家族は何人だった？',
      options: ['5人', '6人', '7人', '8人'],
      correct: 2
    },
    {
      question: '炭治郎の耳飾りの色は？',
      options: ['赤', '青', '緑', '黄色'],
      correct: 0
    },
    {
      question: '禰豆子が最初に目覚めた場所は？',
      options: ['山の中', '家の中', '道端', '病院'],
      correct: 0
    }
  ]

  const startQuiz = () => {
    setQuizStarted(true)
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setAnsweredQuestions([])
  }

  const handleAnswerSelect = (index) => {
    if (selectedAnswer !== null) return // 既に回答済み
    setSelectedAnswer(index)
    
    const isCorrect = index === quizQuestions[currentQuestion].correct
    if (isCorrect) {
      setScore(score + 1)
    }
    
    setAnsweredQuestions([...answeredQuestions, { question: currentQuestion, answer: index, correct: isCorrect }])
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setQuizStarted(false)
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setAnsweredQuestions([])
  }

  return (
    <div className="app">
      {/* ナビゲーション */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">鬼滅の刃</div>
          <ul className="nav-menu">
            <li><a href="#home">ホーム</a></li>
            <li><a href="#story">ストーリー</a></li>
            <li><a href="#characters">キャラクター</a></li>
            <li><a href="#gallery">ギャラリー</a></li>
            <li><a href="#quiz">クイズ</a></li>
          </ul>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">鬼滅の刃</h1>
          <p className="hero-subtitle">KIMETSU NO YAIBA</p>
          <p className="hero-description">
            大正時代を舞台に、家族を鬼に殺された少年・炭治郎が<br />
            鬼になった妹を人間に戻すため、鬼殺隊として戦う物語
          </p>
          <button className="cta-button">詳細を見る</button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* ストーリーセクション */}
      <section id="story" className="story-section">
        <div className="container">
          <h2 className="section-title">ストーリー</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                大正時代、日本。炭治郎は家族を殺され、唯一生き残った妹・禰豆子は鬼となってしまう。
                禰豆子を人間に戻すため、炭治郎は鬼殺隊に入隊し、鬼との戦いに身を投じる。
              </p>
              <p>
                水の呼吸を極めた炭治郎は、仲間たちと共に最強の鬼・鬼舞辻無惨との決戦に挑む。
                家族の絆、仲間との友情、そして希望を胸に、炭治郎の戦いが始まる。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* キャラクターセクション */}
      <section id="characters" className="characters-section">
        <div className="container">
          <h2 className="section-title">主要キャラクター</h2>
          <div className="characters-grid">
            <div className="character-card">
              <div className="character-image tanjiro"></div>
              <h3>竈門炭治郎</h3>
              <p>水の呼吸を使う鬼殺隊士。家族を守るために戦う優しい少年。</p>
            </div>
            <div className="character-card">
              <div className="character-image nezuko"></div>
              <h3>竈門禰豆子</h3>
              <p>炭治郎の妹。鬼になったが、人間の心を保っている。</p>
            </div>
            <div className="character-card">
              <div className="character-image zenitsu"></div>
              <h3>我妻善逸</h3>
              <p>雷の呼吸を使う鬼殺隊士。普段は臆病だが、眠ると強くなる。</p>
            </div>
            <div className="character-card">
              <div className="character-image inosuke"></div>
              <h3>嘴平伊之助</h3>
              <p>獣の呼吸を使う鬼殺隊士。猪の頭を被った野生児。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2 className="section-title">ギャラリー</h2>
          <div className="gallery-grid">
            <div className="gallery-item"></div>
            <div className="gallery-item"></div>
            <div className="gallery-item"></div>
            <div className="gallery-item"></div>
          </div>
        </div>
      </section>

      {/* クイズセクション */}
      <section id="quiz" className="quiz-section">
        <div className="container">
          <h2 className="section-title">鬼滅の刃クイズ</h2>
          
          {!quizStarted && !showResult && (
            <div className="quiz-start">
              <p className="quiz-intro">
                鬼滅の刃に関するクイズに挑戦しましょう！<br />
                {quizQuestions.length}問の問題に答えて、あなたの知識を試してください。
              </p>
              <button className="quiz-start-button" onClick={startQuiz}>
                クイズを開始
              </button>
            </div>
          )}

          {quizStarted && !showResult && (
            <div className="quiz-container">
              <div className="quiz-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
                <p className="progress-text">
                  問題 {currentQuestion + 1} / {quizQuestions.length}
                </p>
              </div>

              <div className="question-card">
                <h3 className="question-text">
                  {quizQuestions[currentQuestion].question}
                </h3>
                
                <div className="options-container">
                  {quizQuestions[currentQuestion].options.map((option, index) => {
                    const isSelected = selectedAnswer === index
                    const isCorrect = index === quizQuestions[currentQuestion].correct
                    const showAnswer = selectedAnswer !== null
                    
                    return (
                      <button
                        key={index}
                        className={`option-button ${
                          showAnswer
                            ? isCorrect
                              ? 'correct'
                              : isSelected && !isCorrect
                              ? 'incorrect'
                              : ''
                            : ''
                        } ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={selectedAnswer !== null}
                      >
                        {option}
                        {showAnswer && isCorrect && (
                          <span className="answer-icon">✓</span>
                        )}
                        {showAnswer && isSelected && !isCorrect && (
                          <span className="answer-icon">✗</span>
                        )}
                      </button>
                    )
                  })}
                </div>

                {selectedAnswer !== null && (
                  <div className="answer-feedback">
                    {selectedAnswer === quizQuestions[currentQuestion].correct ? (
                      <p className="feedback correct-feedback">
                        <span className="feedback-icon">🎉</span>
                        正解です！
                      </p>
                    ) : (
                      <p className="feedback incorrect-feedback">
                        <span className="feedback-icon">❌</span>
                        不正解です。正解は「{quizQuestions[currentQuestion].options[quizQuestions[currentQuestion].correct]}」です。
                      </p>
                    )}
                    <button className="next-button" onClick={nextQuestion}>
                      {currentQuestion < quizQuestions.length - 1 ? '次の問題' : '結果を見る'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {showResult && (
            <div className="quiz-result">
              <div className="result-card">
                <h3 className="result-title">クイズ結果</h3>
                <div className="score-display">
                  <div className="score-circle">
                    <span className="score-number">{score}</span>
                    <span className="score-total">/ {quizQuestions.length}</span>
                  </div>
                  <p className="score-percentage">
                    {Math.round((score / quizQuestions.length) * 100)}% 正解
                  </p>
                </div>
                
                <div className="result-message">
                  {score === quizQuestions.length ? (
                    <p className="perfect-message">
                      <span className="result-emoji">🏆</span>
                      完璧です！あなたは鬼滅の刃の真のファンです！
                    </p>
                  ) : score >= quizQuestions.length * 0.7 ? (
                    <p className="good-message">
                      <span className="result-emoji">⭐</span>
                      素晴らしい！とても良い結果です！
                    </p>
                  ) : score >= quizQuestions.length * 0.5 ? (
                    <p className="ok-message">
                      <span className="result-emoji">👍</span>
                      まずまずです。もう一度挑戦してみましょう！
                    </p>
                  ) : (
                    <p className="try-again-message">
                      <span className="result-emoji">💪</span>
                      もう一度挑戦して、もっと学びましょう！
                    </p>
                  )}
                </div>

                <div className="result-details">
                  <h4>詳細結果</h4>
                  <div className="details-list">
                    {answeredQuestions.map((item, index) => (
                      <div key={index} className={`detail-item ${item.correct ? 'correct' : 'incorrect'}`}>
                        <span className="detail-number">問題 {index + 1}</span>
                        <span className="detail-status">
                          {item.correct ? '✓ 正解' : '✗ 不正解'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="restart-button" onClick={resetQuiz}>
                  もう一度挑戦
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* フッター */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 鬼滅の刃 公式サイト. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
