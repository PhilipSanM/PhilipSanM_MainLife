import React, { useEffect, useState } from "react"

const WelcomeMessage = () => {
  const [showMessage, setShowMessage] = useState(true)
  const [animatedText, setAnimatedText] = useState("")
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const messages = [
      "Weelcome",
      "Biienvenido",
      "Biienvenue",
      "Wiillkommen",
      "Beenvenuto",
      "Väälkommen",
      "Weelkom",
      "Beem-vindo",
      "Дообро пожаловать",
      "よううこそ",
      "欢迎迎",
      "환영영합니다",
      "Hooşgeldiniz",
      "أهلاً و سهلاً",
      "ברוך הבבא",
      "स्वागत हेहे",
      "స్వాగగతం",
      "ยินนดีต้อนรับ",
      "ຍິນນດີຕ້ອນຮັບ",
      "សូមមស្វាគមន៍",
    ]

    const message = messages[Math.floor(Math.random() * messages.length)]
    let currentIndex = 0

    const timer = setInterval(() => {
      setAnimatedText(prevText => prevText + message[currentIndex])
      currentIndex++
      if (currentIndex === message.length - 1) {
        clearInterval(timer)
        setTimeout(() => {
          setAnimationComplete(true)
        }, 1000)
      }
    }, 100)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (animationComplete) {
      const timeout = setTimeout(() => {
        setShowMessage(false)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [animationComplete])

  if (!showMessage) {
    return null
  }

  return (
    <div className={`welcome-message ${showMessage ? "show" : ""}`}>
      <h1>{animatedText}</h1>
    </div>
  )
}

export default WelcomeMessage
