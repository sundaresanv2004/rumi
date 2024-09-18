'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

export default function BotpressChat() {
  const isMounted = useRef(false)
  const botId = 'bbe97b9d-6f7d-4585-b293-70abd10dbbae'

  useEffect(() => {
    if (isMounted.current) return
    isMounted.current = true

    const initBotpress = () => {
      window.botpressWebChat.init({
        botId: botId,
        hostUrl: 'https://cdn.botpress.cloud/webchat/v2.1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: botId,
        botName: 'Support Bot',
        containerWidth: 400,
        layoutWidth: 400,
        hideWidget: true,
        disableAnimations: true,
        closeOnEscape: true,
        showConversationsButton: false,
        enableTranscriptDownload: false,
      })
    }

    if (window.botpressWebChat) {
      initBotpress()
    } else {
      window.addEventListener('botpress.webchat.ready', initBotpress)
    }

    return () => {
      window.removeEventListener('botpress.webchat.ready', initBotpress)
    }
  }, [])

  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"
        strategy="lazyOnload"
      />
      <Script
        src={`https://mediafiles.botpress.cloud/${botId}/webchat/v2.1/config.js`}
        strategy="lazyOnload"
      />
      <div id="botpress-webchat" />
      <style jsx global>{`
        #bp-web-widget-container {
          z-index: 9999;
          right: 16px !important;
          bottom: 80px !important;
        }
      `}</style>
    </>
  )
}